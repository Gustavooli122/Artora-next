
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

  return {
    title: `${product.name} - Artora`,
    description: product.description,
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

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return <ProductPage product={product} />;
}