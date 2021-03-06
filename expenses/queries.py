from typing import List
# pylint: disable=no-name-in-module
from pydantic import BaseModel
from expenses.models import Expense, NotFound

class ListExpensesQuery(BaseModel):

    def execute(self) -> List[Expense]:
        expenses = Expense.ListAll()

        return expenses
    
class GetExpenseByIDQuery(BaseModel):
    id: str

    def execute(self) -> Expense:
        expense = Expense.GetExpenseByID(self.id)

        return expense

def main():
    print(ListExpensesQuery().execute())
    print('==================')
    print(GetExpenseByIDQuery('e71c5fb5-6be7-49a6-852d-7c3063ecb6a1').execute())

if __name__ == "__main__":
    main()