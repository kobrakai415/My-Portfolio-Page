
/**
 * Demo Interface
 * @param type The type of this Interface
 * @param children Optional: The children of this Interface
 */
interface IInterface {

    type: string

    children?: any
}

interface IExtendedInterface extends IInterface, Document {}
type IDemo = IInterface & Document

// import { RouteChildrenProps } from "react-router" NO GO in .d.ts
type IDemoFunction = (text: string, route: import("react-router-dom").RouteChildrenProps) => number
