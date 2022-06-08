const Query = ({val, handleChange}) => {
    return (
        <div>
            <span>find countries</span>
            <input value={val} onChange={handleChange} />
        </div>
    )
}

export default Query