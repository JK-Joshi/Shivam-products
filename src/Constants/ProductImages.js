//Images Imports
import gc1 from '../Assets/GarlicCrusher/1.jpg'
import gc2 from '../Assets/GarlicCrusher/2.jpg'
import gc3 from '../Assets/GarlicCrusher/3.jpg'
import gc4 from '../Assets/GarlicCrusher/4.jpg'
import p1 from '../Assets/Piler/1.jpeg'
import p2 from '../Assets/Piler/2.jpeg'
import p3 from '../Assets/Piler/3.jpeg'
import p4 from '../Assets/Piler/4.jpeg'
import p5 from '../Assets/Piler/5.jpeg'
import p6 from '../Assets/Piler/6.jpeg'
import n1 from '../Assets/Nobes/1.png'
import n2 from '../Assets/Nobes/2.png'
import n3 from '../Assets/Nobes/3.png'
import n4 from '../Assets/Nobes/4.jpg'
import n5 from '../Assets/Nobes/5.jpg'
import n6 from '../Assets/Nobes/6.jpg'
import n7 from '../Assets/Nobes/7.jpg'
import n9 from '../Assets/Nobes/9.jpg'
import n11 from '../Assets/Nobes/11.jpg'
import n12 from '../Assets/Nobes/12.jpg'
import n13 from '../Assets/Nobes/13.jpg'
import n14 from '../Assets/Nobes/14.jpg'
import n15 from '../Assets/Nobes/15.jpg'
import n16 from '../Assets/Nobes/16.jpg'
import n17 from '../Assets/Nobes/17.jpg'
import n18 from '../Assets/Nobes/18.jpg'
import n19 from '../Assets/Nobes/19.jpg'
import n20 from '../Assets/Nobes/20.jpg'
import n21 from '../Assets/Nobes/21.jpg'
import n22 from '../Assets/Nobes/22.jpg'
import n23 from '../Assets/Nobes/23.jpg'
import n24 from '../Assets/Nobes/24.jpg'
import n25 from '../Assets/Nobes/25.jpg'
import n26 from '../Assets/Nobes/26.jpeg'
import n27 from '../Assets/Nobes/27.jpeg'
import n28 from '../Assets/Nobes/28.jpeg'
import n29 from '../Assets/Nobes/29.jpeg'
import ml1 from '../Assets/MakerLocks/1.JPG'
import ml2 from '../Assets/MakerLocks/2.JPG'
import ml3 from '../Assets/MakerLocks/3.JPG'
import ml4 from '../Assets/MakerLocks/4.JPG'
import ml5 from '../Assets/MakerLocks/5.JPG'
import ml6 from '../Assets/MakerLocks/6.JPG'
import ml7 from '../Assets/MakerLocks/7.JPG'
import ml8 from '../Assets/MakerLocks/8.JPG'
import ml9 from '../Assets/MakerLocks/9.JPG'
import ml10 from '../Assets/MakerLocks/10.JPG'
import ml11 from '../Assets/MakerLocks/11.JPG'
import ml12 from '../Assets/MakerLocks/12.JPG'
import ml13 from '../Assets/MakerLocks/13.JPG'
import ml14 from '../Assets/MakerLocks/14.JPG'
import ml15 from '../Assets/MakerLocks/15.JPG'
import ml16 from '../Assets/MakerLocks/16.JPG'
import ml17 from '../Assets/MakerLocks/17.JPG'
import ml18 from '../Assets/MakerLocks/18.JPG'
import ml19 from '../Assets/MakerLocks/19.JPG'
import ml20 from '../Assets/MakerLocks/20.JPG'
import ml21 from '../Assets/MakerLocks/21.JPG'
import ml22 from '../Assets/MakerLocks/22.JPG'
import ml23 from '../Assets/MakerLocks/23.JPG'
import ml24 from '../Assets/MakerLocks/24.JPG'
import ml25 from '../Assets/MakerLocks/25.JPG'
import ml26 from '../Assets/MakerLocks/26.JPG'
import ml27 from '../Assets/MakerLocks/27.JPG'
import ml28 from '../Assets/MakerLocks/28.JPG'
import ml29 from '../Assets/MakerLocks/29.JPG'
import lc1 from '../Assets/LamonCrusher/1.jpeg'
import lc2 from '../Assets/LamonCrusher/2.jpeg'
import kh1 from '../Assets/KeyHolders/1.png'
import kh2 from '../Assets/KeyHolders/2.png'
import kh3 from '../Assets/KeyHolders/3.jpeg'
import kh4 from '../Assets/KeyHolders/4.jpeg'
import kh5 from '../Assets/KeyHolders/5.jpeg'
import kh6 from '../Assets/KeyHolders/6.jpeg'
import kh7 from '../Assets/KeyHolders/7.jpeg'
import kh8 from '../Assets/KeyHolders/8.jpeg'
import h1 from '../Assets/Handles/1.jpg'
import h2 from '../Assets/Handles/2.jpg'
import h3 from '../Assets/Handles/3.jpg'
import h4 from '../Assets/Handles/4.jpg'
import h5 from '../Assets/Handles/5.jpg'
import h6 from '../Assets/Handles/6.jpg'
import h7 from '../Assets/Handles/7.jpg'
import h8 from '../Assets/Handles/8.jpg'
import h9 from '../Assets/Handles/9.jpg'
import h10 from '../Assets/Handles/10.jpg'
import h11 from '../Assets/Handles/11.jpg'
import h12 from '../Assets/Handles/12.jpg'
import h13 from '../Assets/Handles/13.png'

// Export categories for easy reference
export const productCategories = [
    {
        id: "garlic-crusher",
        name: "Garlic Crusher",
        image: gc1,
        description: "High-quality garlic crushing tools for professional and home use",
        category: 'garlic-crusher',
        is_publish: true
    },
    {
        id: "piler",
        name: "Piler",
        image: p1,
        description: "Professional grade piler tools",
        category: 'piler',
        is_publish: true
    },
    {
        id: "nobes",
        name: "Nobes",
        image: n7,
        description: "Premium quality nobes for various applications",
        category: 'nobes',
        is_publish: true
    },
    {
        id: "maker-locks",
        name: "Maker Locks",
        image: ml1,
        description: "High-security locks and locking mechanisms",
        category: "maker-locks",
        is_publish: true
    },
    {
        id: "lamon-crusher",
        name: "Lamon Crusher",
        image: lc1,
        description: "Professional grade lamon crushers",
        category: "lamon-crusher",
        is_publish: true
    },
    {
        id: "key-holders",
        name: "Key Holders",
        image: kh1,
        description: "Organized key storage solutions",
        category: "key-holders",
        is_publish: true
    },
    {
        id: "handles",
        name: "Handles",
        image: h1,
        description: "Modern handles for cabinets and furniture",
        category: "handles",
        is_publish: true
    }
];

// Garlic Crusher Products
export const garlicCrusher = [
    {
        id: "gc1",
        productName: "Stainless Steel Garlic Crusher",
        productsImage: gc1,
        productImageAltText: "Premium stainless steel garlic crusher with ergonomic design",
        productDescription: "High-quality stainless steel garlic crusher with comfortable grip and easy cleaning design. Perfect for professional kitchens and home use.",
        urlSlug: "stainless-steel-garlic-crusher",
        category: "garlic-crusher"
    },
    {
        id: "gc2",
        productName: "Professional Garlic Press",
        productsImage: gc2,
        productImageAltText: "Professional grade garlic press with heavy-duty construction",
        productDescription: "Heavy-duty professional garlic press with stainless steel construction. Features a self-cleaning design and comfortable handle grip.",
        urlSlug: "professional-garlic-press",
        category: "garlic-crusher"
    },
    {
        id: "gc3",
        productName: "Premium Garlic Crusher",
        productsImage: gc3,
        productImageAltText: "Premium quality garlic crusher with modern design",
        productDescription: "Modern design garlic crusher with premium build quality. Perfect for both professional and home kitchens.",
        urlSlug: "premium-garlic-crusher",
        category: "garlic-crusher"
    },
    {
        id: "gc4",
        productName: "Heavy Duty Garlic Press",
        productsImage: gc4,
        productImageAltText: "Heavy duty garlic press with stainless steel construction",
        productDescription: "Heavy-duty garlic press made from high-quality stainless steel. Features a comfortable grip and easy cleaning design.",
        urlSlug: "heavy-duty-garlic-press",
        category: "garlic-crusher"
    }
];

// Piler Products
export const pilerProducts = [
    {
        id: "p1",
        productName: "Professional Piler",
        productsImage: p1,
        productImageAltText: "Professional grade piler with ergonomic design",
        productDescription: "High-quality piler with comfortable grip and durable construction. Perfect for professional use.",
        urlSlug: "professional-piler",
        category: "piler"
    },
    {
        id: "p2",
        productName: "Heavy Duty Piler",
        productsImage: p2,
        productImageAltText: "Heavy duty piler with robust construction",
        productDescription: "Heavy-duty piler with robust construction and comfortable grip. Ideal for industrial applications.",
        urlSlug: "heavy-duty-piler",
        category: "piler"
    },
    {
        id: "p3",
        productName: "Premium Piler Set",
        productsImage: p3,
        productImageAltText: "Premium piler set with multiple sizes",
        productDescription: "Complete set of premium pilers in various sizes. Perfect for professional and home use.",
        urlSlug: "premium-piler-set",
        category: "piler"
    },
    {
        id: "p4",
        productName: "Industrial Piler",
        productsImage: p4,
        productImageAltText: "Industrial grade piler with advanced features",
        productDescription: "Industrial grade piler with advanced features and durable construction. Suitable for heavy-duty applications.",
        urlSlug: "industrial-piler",
        category: "piler"
    },
    {
        id: "p5",
        productName: "Multi-Purpose Piler",
        productsImage: p5,
        productImageAltText: "Multi-purpose piler with versatile design",
        productDescription: "Versatile multi-purpose piler with ergonomic design. Perfect for various applications.",
        urlSlug: "multi-purpose-piler",
        category: "piler"
    },
    {
        id: "p6",
        productName: "Compact Piler",
        productsImage: p6,
        productImageAltText: "Compact piler with space-saving design",
        productDescription: "Compact piler with space-saving design and comfortable grip. Ideal for home and professional use.",
        urlSlug: "compact-piler",
        category: "piler"
    }
];

// Nobes Products
export const nobesProducts = [
    {
        id: "n1",
        productName: "Classic Door Nobe",
        productsImage: n1,
        productImageAltText: "Classic door nobe with elegant design",
        productDescription: "Elegant classic door nobe with premium finish. Perfect for traditional and modern interiors.",
        urlSlug: "classic-door-nobe",
        category: "nobes"
    },
    {
        id: "n2",
        productName: "Modern Door Handle",
        productsImage: n2,
        productImageAltText: "Modern door handle with sleek design",
        productDescription: "Sleek modern door handle with contemporary design. Ideal for modern homes and offices.",
        urlSlug: "modern-door-handle",
        category: "nobes"
    },
    {
        id: "n3",
        productName: "Premium Door Nobe",
        productsImage: n3,
        productImageAltText: "Premium door nobe with luxury finish",
        productDescription: "Luxury door nobe with premium finish and elegant design. Perfect for high-end applications.",
        urlSlug: "premium-door-nobe",
        category: "nobes"
    },
    {
        id: "n4",
        productName: "Contemporary Door Handle",
        productsImage: n4,
        productImageAltText: "Contemporary door handle with modern aesthetics",
        productDescription: "Contemporary door handle with modern aesthetics and durable construction.",
        urlSlug: "contemporary-door-handle",
        category: "nobes"
    },
    {
        id: "n5",
        productName: "Designer Door Nobe",
        productsImage: n5,
        productImageAltText: "Designer door nobe with unique style",
        productDescription: "Unique designer door nobe with distinctive style. Perfect for custom interiors.",
        urlSlug: "designer-door-nobe",
        category: "nobes"
    },
    {
        id: "n6",
        productName: "Luxury Door Handle",
        productsImage: n6,
        productImageAltText: "Luxury door handle with premium finish",
        productDescription: "Premium luxury door handle with elegant finish. Ideal for high-end residential and commercial spaces.",
        urlSlug: "luxury-door-handle",
        category: "nobes"
    },
    {
        id: "n7",
        productName: "Art Deco Door Nobe",
        productsImage: n7,
        productImageAltText: "Art deco style door nobe",
        productDescription: "Art deco style door nobe with vintage aesthetics. Perfect for period homes and themed interiors.",
        urlSlug: "art-deco-door-nobe",
        category: "nobes"
    },
    {
        id: "n9",
        productName: "Vintage Door Nobe",
        productsImage: n9,
        productImageAltText: "Vintage style door nobe",
        productDescription: "Vintage style door nobe with classic design. Perfect for traditional and heritage buildings.",
        urlSlug: "vintage-door-nobe",
        category: "nobes"
    },
    {
        id: "n10",
        productName: "Industrial Door Handle",
        productsImage: n11,
        productImageAltText: "Industrial style door handle",
        productDescription: "Industrial style door handle with robust construction. Ideal for commercial and industrial spaces.",
        urlSlug: "industrial-door-handle",
        category: "nobes"
    },
    {
        id: "n11",
        productName: "Modern Door Nobe Set",
        productsImage: n12,
        productImageAltText: "Modern door nobe set with contemporary design",
        productDescription: "Complete set of modern door nobes with contemporary design. Perfect for modern homes and offices.",
        urlSlug: "modern-door-nobe-set",
        category: "nobes"
    },
    {
        id: "n12",
        productName: "Premium Door Handle Set",
        productsImage: n13,
        productImageAltText: "Premium door handle set with luxury finish",
        productDescription: "Premium door handle set with luxury finish and elegant design. Ideal for high-end properties.",
        urlSlug: "premium-door-handle-set",
        category: "nobes"
    },
    {
        id: "n13",
        productName: "Contemporary Door Nobe",
        productsImage: n14,
        productImageAltText: "Contemporary door nobe with modern aesthetics",
        productDescription: "Contemporary door nobe with modern aesthetics and durable construction. Perfect for modern interiors.",
        urlSlug: "contemporary-door-nobe",
        category: "nobes"
    },
    {
        id: "n14",
        productName: "Designer Door Handle",
        productsImage: n15,
        productImageAltText: "Designer door handle with unique style",
        productDescription: "Unique designer door handle with distinctive style. Ideal for custom interiors.",
        urlSlug: "designer-door-handle",
        category: "nobes"
    },
    {
        id: "n15",
        productName: "Luxury Door Nobe",
        productsImage: n16,
        productImageAltText: "Luxury door nobe with premium finish",
        productDescription: "Premium luxury door nobe with elegant finish. Perfect for high-end residential and commercial spaces.",
        urlSlug: "luxury-door-nobe",
        category: "nobes"
    },
    {
        id: "n16",
        productName: "Art Deco Door Handle",
        productsImage: n17,
        productImageAltText: "Art deco style door handle",
        productDescription: "Art deco style door handle with vintage aesthetics. Ideal for period homes and themed interiors.",
        urlSlug: "art-deco-door-handle",
        category: "nobes"
    },
    {
        id: "n17",
        productName: "Minimalist Door Nobe",
        productsImage: n18,
        productImageAltText: "Minimalist door nobe with clean design",
        productDescription: "Clean minimalist door nobe with simple design. Perfect for modern minimalist interiors.",
        urlSlug: "minimalist-door-nobe",
        category: "nobes"
    },
    {
        id: "n18",
        productName: "Vintage Door Handle",
        productsImage: n19,
        productImageAltText: "Vintage style door handle",
        productDescription: "Vintage style door handle with classic design. Ideal for traditional and heritage buildings.",
        urlSlug: "vintage-door-handle",
        category: "nobes"
    },
    {
        id: "n19",
        productName: "Industrial Door Nobe",
        productsImage: n20,
        productImageAltText: "Industrial style door nobe",
        productDescription: "Industrial style door nobe with robust construction. Perfect for commercial and industrial spaces.",
        urlSlug: "industrial-door-nobe",
        category: "nobes"
    },
    {
        id: "n20",
        productName: "Modern Door Handle Set",
        productsImage: n21,
        productImageAltText: "Modern door handle set with contemporary design",
        productDescription: "Complete set of modern door handles with contemporary design. Ideal for modern homes and offices.",
        urlSlug: "modern-door-handle-set",
        category: "nobes"
    },
    {
        id: "n21",
        productName: "Premium Door Nobe Set",
        productsImage: n22,
        productImageAltText: "Premium door nobe set with luxury finish",
        productDescription: "Premium door nobe set with luxury finish and elegant design. Perfect for high-end properties.",
        urlSlug: "premium-door-nobe-set",
        category: "nobes"
    },
    {
        id: "n22",
        productName: "Contemporary Door Handle Set",
        productsImage: n23,
        productImageAltText: "Contemporary door handle set with modern aesthetics",
        productDescription: "Contemporary door handle set with modern aesthetics and durable construction. Ideal for modern interiors.",
        urlSlug: "contemporary-door-handle-set",
        category: "nobes"
    },
    {
        id: "n23",
        productName: "Designer Door Nobe Set",
        productsImage: n24,
        productImageAltText: "Designer door nobe set with unique style",
        productDescription: "Unique designer door nobe set with distinctive style. Perfect for custom interiors.",
        urlSlug: "designer-door-nobe-set",
        category: "nobes"
    },
    {
        id: "n24",
        productName: "Luxury Door Handle Set",
        productsImage: n25,
        productImageAltText: "Luxury door handle set with premium finish",
        productDescription: "Premium luxury door handle set with elegant finish. Ideal for high-end residential and commercial spaces.",
        urlSlug: "luxury-door-handle-set",
        category: "nobes"
    },
    {
        id: "n25",
        productName: "Art Deco Door Nobe Set",
        productsImage: n26,
        productImageAltText: "Art deco style door nobe set",
        productDescription: "Art deco style door nobe set with vintage aesthetics. Perfect for period homes and themed interiors.",
        urlSlug: "art-deco-door-nobe-set",
        category: "nobes"
    },
    {
        id: "n26",
        productName: "Minimalist Door Handle Set",
        productsImage: n27,
        productImageAltText: "Minimalist door handle set with clean design",
        productDescription: "Clean minimalist door handle set with simple design. Ideal for modern minimalist interiors.",
        urlSlug: "minimalist-door-handle-set",
        category: "nobes"
    },
    {
        id: "n27",
        productName: "Vintage Door Nobe Set",
        productsImage: n28,
        productImageAltText: "Vintage style door nobe set",
        productDescription: "Vintage style door nobe set with classic design. Perfect for traditional and heritage buildings.",
        urlSlug: "vintage-door-nobe-set",
        category: "nobes"
    },
    {
        id: "n28",
        productName: "Industrial Door Handle Set",
        productsImage: n29,
        productImageAltText: "Industrial style door handle set",
        productDescription: "Industrial style door handle set with robust construction. Ideal for commercial and industrial spaces.",
        urlSlug: "industrial-door-handle-set",
        category: "nobes"
    }
];

// Maker Locks Products
export const makerLocksProducts = [
    {
        id: "ml1",
        productName: "Premium Security Lock",
        productsImage: ml1,
        productImageAltText: "Premium security lock with advanced mechanism",
        productDescription: "Advanced security lock with robust construction and premium finish. Ensures maximum protection for your property.",
        urlSlug: "premium-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml2",
        productName: "Heavy Duty Door Lock",
        productsImage: ml2,
        productImageAltText: "Heavy duty door lock with reinforced construction",
        productDescription: "Heavy-duty door lock with reinforced construction and durable materials. Perfect for commercial and residential use.",
        urlSlug: "heavy-duty-door-lock",
        category: "maker-locks"
    },
    {
        id: "ml3",
        productName: "Smart Security Lock",
        productsImage: ml3,
        productImageAltText: "Smart security lock with modern features",
        productDescription: "Modern smart security lock with advanced features and sleek design. Ideal for contemporary homes and offices.",
        urlSlug: "smart-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml4",
        productName: "Commercial Grade Lock",
        productsImage: ml4,
        productImageAltText: "Commercial grade lock with industrial strength",
        productDescription: "Industrial strength commercial grade lock with maximum security features. Perfect for business premises.",
        urlSlug: "commercial-grade-lock",
        category: "maker-locks"
    },
    {
        id: "ml5",
        productName: "Residential Security Lock",
        productsImage: ml5,
        productImageAltText: "Residential security lock with elegant design",
        productDescription: "Elegant residential security lock with reliable protection. Ideal for homes and apartments.",
        urlSlug: "residential-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml6",
        productName: "High-Security Lock Set",
        productsImage: ml6,
        productImageAltText: "Complete high-security lock set",
        productDescription: "Complete set of high-security locks with matching design. Perfect for consistent security across your property.",
        urlSlug: "high-security-lock-set",
        category: "maker-locks"
    },
    {
        id: "ml7",
        productName: "Professional Door Lock",
        productsImage: ml7,
        productImageAltText: "Professional grade door lock",
        productDescription: "Professional grade door lock with advanced security features. Ideal for commercial applications.",
        urlSlug: "professional-door-lock",
        category: "maker-locks"
    },
    {
        id: "ml8",
        productName: "Premium Lock Set",
        productsImage: ml8,
        productImageAltText: "Premium lock set with luxury finish",
        productDescription: "Premium lock set with luxury finish and advanced security features. Perfect for high-end properties.",
        urlSlug: "premium-lock-set",
        category: "maker-locks"
    },
    {
        id: "ml9",
        productName: "Security Door Lock",
        productsImage: ml9,
        productImageAltText: "Security door lock with reinforced design",
        productDescription: "Security door lock with reinforced design and durable construction. Ideal for main entry doors.",
        urlSlug: "security-door-lock",
        category: "maker-locks"
    },
    {
        id: "ml10",
        productName: "Modern Security Lock",
        productsImage: ml10,
        productImageAltText: "Modern security lock with sleek design",
        productDescription: "Modern security lock with sleek design and advanced features. Perfect for contemporary homes.",
        urlSlug: "modern-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml11",
        productName: "Heavy Duty Security Lock",
        productsImage: ml11,
        productImageAltText: "Heavy duty security lock with robust construction",
        productDescription: "Heavy-duty security lock with robust construction and maximum protection. Ideal for industrial use.",
        urlSlug: "heavy-duty-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml12",
        productName: "Premium Door Security Lock",
        productsImage: ml12,
        productImageAltText: "Premium door security lock with advanced features",
        productDescription: "Premium door security lock with advanced features and elegant design. Perfect for luxury properties.",
        urlSlug: "premium-door-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml13",
        productName: "Commercial Security Lock",
        productsImage: ml13,
        productImageAltText: "Commercial security lock with industrial grade",
        productDescription: "Commercial security lock with industrial grade construction. Ideal for business premises.",
        urlSlug: "commercial-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml14",
        productName: "Residential Grade Lock",
        productsImage: ml14,
        productImageAltText: "Residential grade lock with reliable security",
        productDescription: "Residential grade lock with reliable security features. Perfect for homes and apartments.",
        urlSlug: "residential-grade-lock",
        category: "maker-locks"
    },
    {
        id: "ml15",
        productName: "High-Security Door Lock",
        productsImage: ml15,
        productImageAltText: "High-security door lock with maximum protection",
        productDescription: "High-security door lock with maximum protection features. Ideal for high-security areas.",
        urlSlug: "high-security-door-lock",
        category: "maker-locks"
    },
    {
        id: "ml16",
        productName: "Professional Security Lock",
        productsImage: ml16,
        productImageAltText: "Professional security lock with advanced mechanism",
        productDescription: "Professional security lock with advanced mechanism and durable construction. Perfect for commercial use.",
        urlSlug: "professional-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml17",
        productName: "Premium Security Lock Set",
        productsImage: ml17,
        productImageAltText: "Premium security lock set with luxury finish",
        productDescription: "Premium security lock set with luxury finish and advanced features. Ideal for high-end properties.",
        urlSlug: "premium-security-lock-set",
        category: "maker-locks"
    },
    {
        id: "ml18",
        productName: "Heavy Duty Door Security Lock",
        productsImage: ml18,
        productImageAltText: "Heavy duty door security lock with reinforced design",
        productDescription: "Heavy-duty door security lock with reinforced design and maximum protection. Perfect for industrial applications.",
        urlSlug: "heavy-duty-door-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml19",
        productName: "Modern Door Security Lock",
        productsImage: ml19,
        productImageAltText: "Modern door security lock with sleek design",
        productDescription: "Modern door security lock with sleek design and advanced features. Ideal for contemporary buildings.",
        urlSlug: "modern-door-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml20",
        productName: "Commercial Grade Security Lock",
        productsImage: ml20,
        productImageAltText: "Commercial grade security lock with industrial strength",
        productDescription: "Commercial grade security lock with industrial strength and maximum security. Perfect for business premises.",
        urlSlug: "commercial-grade-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml21",
        productName: "Residential Security Lock Set",
        productsImage: ml21,
        productImageAltText: "Residential security lock set with reliable protection",
        productDescription: "Residential security lock set with reliable protection and elegant design. Ideal for homes and apartments.",
        urlSlug: "residential-security-lock-set",
        category: "maker-locks"
    },
    {
        id: "ml22",
        productName: "High-Security Commercial Lock",
        productsImage: ml22,
        productImageAltText: "High-security commercial lock with maximum protection",
        productDescription: "High-security commercial lock with maximum protection features. Perfect for high-security commercial areas.",
        urlSlug: "high-security-commercial-lock",
        category: "maker-locks"
    },
    {
        id: "ml23",
        productName: "Professional Grade Security Lock",
        productsImage: ml23,
        productImageAltText: "Professional grade security lock with advanced features",
        productDescription: "Professional grade security lock with advanced features and durable construction. Ideal for commercial applications.",
        urlSlug: "professional-grade-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml24",
        productName: "Premium Commercial Lock",
        productsImage: ml24,
        productImageAltText: "Premium commercial lock with luxury finish",
        productDescription: "Premium commercial lock with luxury finish and advanced security features. Perfect for high-end business premises.",
        urlSlug: "premium-commercial-lock",
        category: "maker-locks"
    },
    {
        id: "ml25",
        productName: "Heavy Duty Security Lock Set",
        productsImage: ml25,
        productImageAltText: "Heavy duty security lock set with reinforced construction",
        productDescription: "Heavy-duty security lock set with reinforced construction and maximum protection. Ideal for industrial applications.",
        urlSlug: "heavy-duty-security-lock-set",
        category: "maker-locks"
    },
    {
        id: "ml26",
        productName: "Modern Security Lock Set",
        productsImage: ml26,
        productImageAltText: "Modern security lock set with sleek design",
        productDescription: "Modern security lock set with sleek design and advanced features. Perfect for contemporary buildings.",
        urlSlug: "modern-security-lock-set",
        category: "maker-locks"
    },
    {
        id: "ml27",
        productName: "Commercial Security Lock Set",
        productsImage: ml27,
        productImageAltText: "Commercial security lock set with industrial grade",
        productDescription: "Commercial security lock set with industrial grade construction. Ideal for business premises.",
        urlSlug: "commercial-security-lock-set",
        category: "maker-locks"
    },
    {
        id: "ml28",
        productName: "Residential Grade Security Lock",
        productsImage: ml28,
        productImageAltText: "Residential grade security lock with reliable features",
        productDescription: "Residential grade security lock with reliable features and elegant design. Perfect for homes and apartments.",
        urlSlug: "residential-grade-security-lock",
        category: "maker-locks"
    },
    {
        id: "ml29",
        productName: "High-Security Lock System",
        productsImage: ml29,
        productImageAltText: "High-security lock system with maximum protection",
        productDescription: "High-security lock system with maximum protection features and advanced technology. Ideal for high-security areas.",
        urlSlug: "high-security-lock-system",
        category: "maker-locks"
    }
];

// Lamon Crusher Products
export const lamonCrusherProducts = [
    {
        id: "lc1",
        productName: "Professional Lamon Crusher",
        productsImage: lc1,
        productImageAltText: "Professional grade lamon crusher",
        productDescription: "Professional grade lamon crusher with durable construction. Perfect for commercial use.",
        urlSlug: "professional-lamon-crusher",
        category: "lamon-crusher"
    },
    {
        id: "lc2",
        productName: "Heavy Duty Lamon Crusher",
        productsImage: lc2,
        productImageAltText: "Heavy duty lamon crusher with robust design",
        productDescription: "Heavy-duty lamon crusher with robust design and powerful crushing capability. Ideal for industrial applications.",
        urlSlug: "heavy-duty-lamon-crusher",
        category: "lamon-crusher"
    }
];

// KeyHolders Products
export const keyHoldersProducts = [
    {
        id: "kh1",
        productName: "Wall Mount Key Holder",
        productsImage: kh1,
        productImageAltText: "Wall mounted key holder with multiple hooks",
        productDescription: "Wall mounted key holder with multiple hooks for organized key storage. Made from durable materials.",
        urlSlug: "wall-mount-key-holder",
        category: "key-holders"
    },
    {
        id: "kh2",
        productName: "Modern Key Organizer",
        productsImage: kh2,
        productImageAltText: "Modern key organizer with sleek design",
        productDescription: "Sleek modern key organizer with contemporary design. Perfect for homes and offices.",
        urlSlug: "modern-key-organizer",
        category: "key-holders"
    },
    {
        id: "kh3",
        productName: "Premium Key Holder",
        productsImage: kh3,
        productImageAltText: "Premium key holder with luxury finish",
        productDescription: "Premium key holder with luxury finish and elegant design. Ideal for high-end applications.",
        urlSlug: "premium-key-holder",
        category: "key-holders"
    },
    {
        id: "kh4",
        productName: "Multi-Hook Key Holder",
        productsImage: kh4,
        productImageAltText: "Multi-hook key holder with ample storage",
        productDescription: "Multi-hook key holder with ample storage space. Perfect for large key collections.",
        urlSlug: "multi-hook-key-holder",
        category: "key-holders"
    },
    {
        id: "kh5",
        productName: "Compact Key Organizer",
        productsImage: kh5,
        productImageAltText: "Compact key organizer with space-saving design",
        productDescription: "Space-saving compact key organizer with efficient design. Ideal for small spaces.",
        urlSlug: "compact-key-organizer",
        category: "key-holders"
    },
    {
        id: "kh6",
        productName: "Designer Key Holder",
        productsImage: kh6,
        productImageAltText: "Designer key holder with unique style",
        productDescription: "Unique designer key holder with distinctive style. Perfect for custom interiors.",
        urlSlug: "designer-key-holder",
        category: "key-holders"
    },
    {
        id: "kh7",
        productName: "Luxury Key Organizer",
        productsImage: kh7,
        productImageAltText: "Luxury key organizer with premium finish",
        productDescription: "Premium luxury key organizer with elegant finish. Ideal for high-end residential and commercial spaces.",
        urlSlug: "luxury-key-organizer",
        category: "key-holders"
    },
    {
        id: "kh8",
        productName: "Minimalist Key Holder",
        productsImage: kh8,
        productImageAltText: "Minimalist key holder with clean design",
        productDescription: "Clean minimalist key holder with simple design. Perfect for modern minimalist interiors.",
        urlSlug: "minimalist-key-holder",
        category: "key-holders"
    }
];

// Handles Products
export const handlesProducts = [
    {
        id: "h1",
        productName: "Classic Cabinet Handle",
        productsImage: h1,
        productImageAltText: "Classic cabinet handle with traditional design",
        productDescription: "Traditional cabinet handle with classic design. Perfect for traditional and modern kitchens.",
        urlSlug: "classic-cabinet-handle",
        category: "handles"
    },
    {
        id: "h2",
        productName: "Modern Door Handle",
        productsImage: h2,
        productImageAltText: "Modern door handle with sleek design",
        productDescription: "Sleek modern door handle with contemporary design. Ideal for modern homes and offices.",
        urlSlug: "modern-door-handle",
        category: "handles"
    },
    {
        id: "h3",
        productName: "Premium Cabinet Handle",
        productsImage: h3,
        productImageAltText: "Premium cabinet handle with luxury finish",
        productDescription: "Luxury cabinet handle with premium finish and elegant design. Perfect for high-end applications.",
        urlSlug: "premium-cabinet-handle",
        category: "handles"
    },
    {
        id: "h4",
        productName: "Contemporary Handle Set",
        productsImage: h4,
        productImageAltText: "Contemporary handle set with modern aesthetics",
        productDescription: "Contemporary handle set with modern aesthetics and durable construction.",
        urlSlug: "contemporary-handle-set",
        category: "handles"
    },
    {
        id: "h5",
        productName: "Designer Door Handle",
        productsImage: h5,
        productImageAltText: "Designer door handle with unique style",
        productDescription: "Unique designer door handle with distinctive style. Perfect for custom interiors.",
        urlSlug: "designer-door-handle",
        category: "handles"
    },
    {
        id: "h6",
        productName: "Luxury Cabinet Handle",
        productsImage: h6,
        productImageAltText: "Luxury cabinet handle with premium finish",
        productDescription: "Premium luxury cabinet handle with elegant finish. Ideal for high-end residential and commercial spaces.",
        urlSlug: "luxury-cabinet-handle",
        category: "handles"
    },
    {
        id: "h7",
        productName: "Art Deco Handle",
        productsImage: h7,
        productImageAltText: "Art deco style handle",
        productDescription: "Art deco style handle with vintage aesthetics. Perfect for period homes and themed interiors.",
        urlSlug: "art-deco-handle",
        category: "handles"
    },
    {
        id: "h8",
        productName: "Minimalist Handle",
        productsImage: h8,
        productImageAltText: "Minimalist handle with clean design",
        productDescription: "Clean minimalist handle with simple design. Ideal for modern minimalist interiors.",
        urlSlug: "minimalist-handle",
        category: "handles"
    },
    {
        id: "h9",
        productName: "Vintage Handle",
        productsImage: h9,
        productImageAltText: "Vintage style handle",
        productDescription: "Vintage style handle with classic design. Perfect for traditional and heritage buildings.",
        urlSlug: "vintage-handle",
        category: "handles"
    },
    {
        id: "h10",
        productName: "Industrial Handle",
        productsImage: h10,
        productImageAltText: "Industrial style handle",
        productDescription: "Industrial style handle with robust construction. Ideal for commercial and industrial spaces.",
        urlSlug: "industrial-handle",
        category: "handles"
    },
    {
        id: "h11",
        productName: "Modern Cabinet Handle",
        productsImage: h11,
        productImageAltText: "Modern cabinet handle with sleek design",
        productDescription: "Sleek modern cabinet handle with contemporary design. Perfect for modern kitchens and furniture.",
        urlSlug: "modern-cabinet-handle",
        category: "handles"
    },
    {
        id: "h12",
        productName: "Premium Door Handle",
        productsImage: h12,
        productImageAltText: "Premium door handle with luxury finish",
        productDescription: "Premium door handle with luxury finish and elegant design. Ideal for high-end applications.",
        urlSlug: "premium-door-handle",
        category: "handles"
    },
    {
        id: "h13",
        productName: "Designer Handle Set",
        productsImage: h13,
        productImageAltText: "Designer handle set with unique style",
        productDescription: "Unique designer handle set with distinctive style. Perfect for custom interiors.",
        urlSlug: "designer-handle-set",
        category: "handles"
    }
];

// Export all products as a single array for easy access
export const allProducts = [
    ...garlicCrusher,
    ...pilerProducts,
    ...nobesProducts,
    ...makerLocksProducts,
    ...lamonCrusherProducts,
    ...keyHoldersProducts,
    ...handlesProducts
];


