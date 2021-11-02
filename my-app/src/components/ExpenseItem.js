import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Dare';
    const expenseAmount = 294.5;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <h1>{props.id} </h1>
                <div className='expense-item__price'>$ {expenseAmount}</div>
            </div>
        </div>
    );
}



export default ExpenseItem;