
import { getProductById, initialProducts } from "../../data/product";
import { ProductPage } from "../../components/productPage";
export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    return {
      title: "Produto não encontrado - Artora",
      description: "Este produto não existe.",
    };
  }
 const url = `https://artora.company/produtos/${product.id}`
  return {
    title: `${product.name} - Artora`,
    description: product.description,
     alternates: {
      canonical: `${url}`,
    }
  };
}

export function generateStaticParams() {
  return initialProducts.map((p) => ({
    id: p.id,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = getProductById(id);
const DEFAULT_BRAND = "Genérico";
const schema = {
  "@context": "https://schema.org",
  "@type": "Product",

  name: product.name,

  description: product.description
    .replace(/[#*-]/g, "")
    .replace(/\n/g, " ")
    .trim(),

  image: [product.image],

  sku: product.id,

  category: product.category,

  brand: {
    "@type": "Brand",
    name: product.brand || DEFAULT_BRAND,
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: Number(product.rating),
    reviewCount: String(product.reviewsCount).replace(/\D/g, "") || "1",
  },

  offers: {
    "@type": "Offer",

    url: `https://artora.company/produtos/${product.id}`,

    priceCurrency: "BRL",

    price: Number(product.price).toFixed(2),

    availability: "https://schema.org/InStock",

    itemCondition: "https://schema.org/NewCondition",
  },

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://artora.company/produtos/${product.id}`,
  },
};
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (<main><script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/><ProductPage product={product} /></main>);
}