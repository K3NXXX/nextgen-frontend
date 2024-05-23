import icon1 from "../../../public/home-page/features/icon1.svg"
import icon2 from "../../../public/home-page/features/icon2.svg"
import icon3 from "../../../public/home-page/features/icon3.svg"
import icon4 from "../../../public/home-page/features/icon4.svg"
import icon5 from "../../../public/home-page/features/icon5.svg"
import icon6 from "../../../public/home-page/features/icon6.svg"

interface IHomeFeaturesItems {
    id: number
    icon: string
    feature: string
    description: string
}

export const homeFeaturesItems: IHomeFeaturesItems[] = [
    {
        id: 1,
        icon: icon1,
        feature: "User information",
        description: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    },
	{
        id: 2,
        icon: icon2,
        feature: "Deal tracking",
        description: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    },
	{
        id: 3,
        icon: icon3,
        feature: "Pipeline management",
        description: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    },
	{
        id: 4,
        icon: icon4,
        feature: "Reporting dashboard",
        description: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    },
	{
        id: 5,
        icon: icon5,
        feature: "Meeting scheduling",
        description: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    },
	{
        id: 6,
        icon: icon6,
        feature: "Email tracking",
        description: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    },
]
