const Notification = ({message, isError}) => {
    const notificationStyle = {
        color: isError ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }

    console.log(message)

    return (
        <div className="notification" style={notificationStyle}>{message}</div>
    )
}

export default Notification