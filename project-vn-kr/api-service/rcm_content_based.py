import pandas as pd
import nltk
import re
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity





def find_simi_place(place_name):
    vectorizer = CountVectorizer(min_df=1)
    f_data = pd.read_csv('./mergedDataset.csv')
    count_vect_category = CountVectorizer(min_df=0.0, ngram_range=(1,2))
    revd = f_data['reviews']
    place_category = count_vect_category.fit_transform(revd) 
    place_simi_cate = cosine_similarity(place_category, place_category) 
    place_simi_cate_sorted_ind = place_simi_cate.argsort()[:, ::-1]

    # Biên độ vector tính năng văn bản giữa các dữ liệu đánh giá văn bản
    revd = revd.dropna()

    count_vect_review = CountVectorizer(min_df=2, ngram_range=(1,2))
    place_review = count_vect_review.fit_transform(revd) 


    # Đánh giá sự tương đồng giữa các review text
    place_simi_review = cosine_similarity(place_review, place_review)
    place_simi_review_sorted_ind = place_simi_review.argsort()[:, ::-1]
    # in không lược bớt
    pd.set_option('display.max_rows', None)
    pd.set_option('display.max_columns', None)
    # Công thức 1. Độ tương đồng loại, 2. Độ tương đồng của review text
    place_simi_co = (
                    + place_simi_cate * 0.2
                    + place_simi_review * 0.8
                    )

    place_simi_co_sorted_ind = place_simi_co.argsort()[:, ::-1] 
    
    if place_name not in f_data['name'].values:
        print('Viết nhầm tên cửa hàng rồi. Viết lại đi')
    else:
        place_title = f_data[f_data['name'] == place_name]
        place_index = place_title.index.values
        similar_indexes = place_simi_co_sorted_ind[place_index, :(5)]
        similar_indexes = similar_indexes.reshape(-1)
        return list(f_data['name'].iloc[similar_indexes])


    
