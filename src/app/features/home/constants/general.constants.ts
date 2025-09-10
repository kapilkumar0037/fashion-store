import { IFeaturedAudience, IFeaturedTestimonials } from "@shared/models/general.models";

export const FeaturedAudience: IFeaturedAudience[] = [
    {
        id: 1,
        name: "Men's Fashion",
        image: "men/men-fashion1",
        btnText: "Shop now",
        createdAt: "2025-07-06T07:09:15.979138",
        updatedAt: "2025-07-06T07:09:15.979138"
    },
    {
        id: 2,
        name: "Women's fashion",
        image: "women/women-fashion",
        btnText: "Shop Now",
        createdAt: "2025-07-06T07:09:15.979138",
        updatedAt: "2025-07-06T07:09:15.979138"
    },
    {
        id: 3,
        name: "Baby Fashion",
        image: "kids/kids-fashion",
        btnText: "Shop Now",
        createdAt: "2025-07-06T07:09:15.979138",
        updatedAt: "2025-07-06T07:09:15.979138"
    }
]

export const testimonials: IFeaturedTestimonials[] = [
    {
        "id": 1,
        "title": "Customer Testimonial",
        "name": "Priya Sharma",
        "image": "testimonial/women",
        "designation": "Software Engineer",
        "review": "Absolutely love the collection! The quality of the fabric is premium, and the fit is just perfect. I ordered a dress for my friend's wedding, and it arrived on time with beautiful packaging. Definitely my go-to store for every occasion!",
        "createdAt": "2025-07-06T07:09:15.979138",
        "updatedAt": "2025-07-06T07:09:15.979138"
    },
    {
        "id": 2,
        "title": "Customer Testimonial",
        "name": "Rohan Mehta",
        "image": "testimonial/defaul",
        "designation": "Fashion Enthusiast",
        "review": "Great experience shopping here! The website is super easy to navigate, and the size guide was accurate. I bought a pair of sneakers, and they are as stylish as they looked online. Plus, free returns made me feel confident about my purchase.",
        "createdAt": "2025-07-06T07:09:15.979138",
        "updatedAt": "2025-07-06T07:09:15.979138"
    }
]
