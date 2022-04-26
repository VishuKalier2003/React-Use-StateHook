type InputProps = {
    value: string
    changehandler: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props:InputProps) => {
    return (
        <input type="text" value={props.value} onChange={props.changehandler}/>
    )
}