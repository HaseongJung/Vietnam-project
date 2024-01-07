import pandas as pd
import numpy as np
from scipy import sparse
from sklearn.metrics.pairwise import cosine_similarity
from scipy.sparse import csr_matrix

def recommend(userid,data_rating):
    df = pd.DataFrame(data_rating, columns=['userId', 'restaurantId', 'ratingValue'])


    matrix = df.pivot_table(index='userId', columns='restaurantId', values='ratingValue', fill_value=None)
    matrix_norm = matrix.subtract(matrix.mean(axis=1), axis = 'rows')
    user_similarity = matrix_norm.T.corr()
    # Pick a user ID
    picked_userid =userid

    # xóa id người dùng đã chọn ra khỏi danh sách
    user_similarity.drop(index=picked_userid, inplace=True)
    # Number of similar users
    n = 10

    # User similarity threashold
    user_similarity_threshold = 0.1

    # Get top n similar users
    similar_users = user_similarity[user_similarity[picked_userid]>user_similarity_threshold][picked_userid].sort_values(ascending=False)[:n]
    picked_userid_watched = matrix_norm[matrix_norm.index == picked_userid].dropna(axis=1, how='all')
    similar_user_restaurant = matrix_norm[matrix_norm.index.isin(similar_users.index)].dropna(axis=1, how='all')
    similar_user_restaurant.drop(picked_userid_watched.columns,axis=1, inplace=True, errors='ignore')
    # print(similar_user_restaurant)
    # Chuyển đổi DataFrame thành ma trận thưa
    sparse_similar_user_restaurant = similar_user_restaurant.fillna(0).values
    # print(similar_user_restaurant)
    # Ma trận tương đồng giữa các người dùng
    similar_users_matrix = similar_users.values

    # Tính điểm cho các phim bằng cách nhân ma trận thưa và ma trận tương đồng
    item_scores = sparse_similar_user_restaurant.T.dot(similar_users_matrix)

    # Đếm số lượt rating cho mỗi phim
    count_ratings = np.sum(~np.isnan(similar_user_restaurant.values), axis=0)
    # 2. ~np.isnan(similar_user_restaurant.values): Đoạn mã này tạo ra một ma trận boolean (True/False)
    #  có cùng kích thước với similar_user_restaurant.values.
    # Giá trị True tương ứng với một ô có xếp hạng (không phải NaN), và giá trị False tương ứng với một ô không có xếp hạng (NaN).


    # Tính điểm trung bình cho các phim
    item_scores /= count_ratings

    # Tạo DataFrame từ kết quả
    item_score = pd.DataFrame({'restaurant': similar_user_restaurant.columns, 'restaurant_score': item_scores.flatten()})

    # Sắp xếp các phim theo điểm số
    ranked_item_score = item_score.sort_values(by='restaurant_score', ascending=False)

    # Chọn ra top m phim
    m = 3
    top_m_restaurant = ranked_item_score.head(m)
    print('****************', top_m_restaurant)
    data = top_m_restaurant['restaurant']
    
    res = list(data.values)
    print('data', res)
    return res