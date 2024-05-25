interface IHeadingProps {
    title: string
}
export function Heading({ title }: IHeadingProps) {
    return <h4 style={{color: "white", fontWeight: 700}}>{title}</h4>
}
