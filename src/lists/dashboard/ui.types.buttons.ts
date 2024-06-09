export interface IUIConfiguratorButtonTypes {
    id: number
    type: string
    label: string
}
export const UIConfiguratorButtonTypes: IUIConfiguratorButtonTypes[] = [
    {
        id: 1,
        type: 'transparent',
        label: 'Transparent',
    },
    {
        id: 2,
        type: 'opaque',
        label: 'Opaque',
    },
]
