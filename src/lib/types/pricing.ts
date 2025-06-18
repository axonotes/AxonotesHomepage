export interface CTAButton {
    text: string;
    href?: string;
    disabled?: boolean;
}

export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    priceUnit?: string;
    description: string;
    features: string[];
    cta: CTAButton;
    variant: "default" | "featured";
}
