import ExpenseItem from "./ExpenseItem";

function Expense(props) {
    return (
        <div>
            <ExpenseItem
                title={props.items[0].title}
                id={props.items[0].id}
                date={props.items[0].date}
                amount={props.items[0].amount}
            />
            <ExpenseItem
                title={props.items[1].title}
                id={props.items[1].id}
                date={props.items[1].date}
                amount={props.items[1].amount}
            />
            <ExpenseItem
                title={props.items[2].title}
                id={props.items[2].id}
                date={props.items[2].date}
                amount={props.items[2].amount}
            />
        </div>
    )
}

export default Expense;