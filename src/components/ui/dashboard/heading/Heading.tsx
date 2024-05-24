interface IHeadingProps {
    title: string
}
export function Heading({ title }: IHeadingProps) {
    return <h4 style={{color: "white"}}>{title}</h4>
}
