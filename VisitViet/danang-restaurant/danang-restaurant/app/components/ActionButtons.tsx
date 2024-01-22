// Components
import { Button } from "./Button";
import { PlusIcon } from "~/icons/PlusIcon";
import { CheckIcon } from "~/icons/CheckIcon";
import { TrashIcon } from "~/icons/TrashIcon";

type ActionButtonsProps = {
  isNewItem: boolean;
  isSubmitting: boolean;
};

/**
 * ActionButtons on Admin Detail page
 */
export const ActionButtons = ({
  isNewItem,
  isSubmitting,
}: ActionButtonsProps) => (
  <div className="flex justify-between">
    {isNewItem ? <div /> : (
      <Button
        color="error"
        type="submit"
        name="_action"
        value="delete"
        disabled={isSubmitting}
        startIcon={<TrashIcon />}
      >
        {isSubmitting ? 'Deleting...' : 'Delete'}
      </Button>
    )}
    <Button
      color="primary"
      type="submit"
      name="_action"
      value={isNewItem ? "add" : "update"}
      disabled={isSubmitting}
      startIcon={isNewItem ? <PlusIcon /> : <CheckIcon />}
    >
      {isNewItem ? (isSubmitting ? 'Creating...' : 'Create'): null}
      {isNewItem ? null : (isSubmitting ? 'Updating...' : 'Update')}
    </Button>
  </div>
);
