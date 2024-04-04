interface Button {
    text: string,
}

export const Button = (props: Button) => {

    return (
        <button className="bg-orange-50">{props.text}</button>
    )
}