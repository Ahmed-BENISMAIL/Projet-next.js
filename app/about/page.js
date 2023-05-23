import Image from 'next/image'
export default function About() {
    return (
        <div className="container">
            <div className="banner-item-02">
                <div className="text-content">
                    <h4>About us</h4>
                    <h2>Our company</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <h2>Our Background</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <Image src="/images/feature-image.jpg" alt="" width="600"
                            height="300" priority />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h4>Who we are &amp; What we do?</h4>
                        <div>
                        We are a clothing brand called "Brand Name" (replace with the actual name of the brand). We specialize in designing and creating high-quality garments for men, women, and children. Our mission is to provide stylish and comfortable clothing that reflects the latest fashion trends.

At Brand Name, we believe in using the finest materials and paying attention to detail in every aspect of our production process. Each piece of clothing is carefully crafted to ensure the perfect fit and exceptional durability. We strive to create timeless designs that transcend fleeting fads and become wardrobe staples.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
