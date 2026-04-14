import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

/** Pre-generate all product slugs at build time */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/** SEO metadata per product */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Vaishno Hills Dairy Industries`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} allProducts={products} />;
}
