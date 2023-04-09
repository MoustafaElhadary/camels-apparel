/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@apollo/client';
import Layout from 'components/shared/Layout';
import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { GetProduct_productByHandle_variants_edges_node_selectedOptions } from 'types/generated/GetProduct';
import {
  GetProducts,
  GetProducts_products_edges_node_variants_edges_node_selectedOptions,
} from 'types/generated/GetProducts';
import { Colors } from 'utils/Colors';
import { classNames } from 'utils/helpers';
import { PRODUCTS } from 'utils/queries';

export default function HomePage() {
  const { data } = useQuery<GetProducts>(PRODUCTS);
  const options: GetProducts_products_edges_node_variants_edges_node_selectedOptions[] =
    [];
  return (
    <Layout>
      <main>
        {/* Hero section */}
        <section className="relative overflow-hidden">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font font-bold tracking-tight text-gray-900 sm:text-6xl font-title">
                  It&rsquo;s time for you to represent .... YOU
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the
                  harsh elements of a world that doesn&rsquo;t care if you live
                  or die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

<Link href={`/tm`}>
                      <a
               
                    className="inline-block text-center bg-black border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-black"
                  >
                    Shop Collection
                  </a>
                    </Link>

                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Favorites section */}
        <section aria-labelledby="favorites-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="favorites-heading"
                className="text-2xl font-extrabold tracking-tight text-gray-900"
              >
                Our Collection
              </h2>
              {/* <a
                href="#"
                className="hidden text-sm font-semibold text-black hover:text-black sm:block"
              >
                Browse all favorites<span aria-hidden="true"> &rarr;</span>
              </a> */}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
              {data?.products?.edges.map(({ node: product }) => (
                <div key={product.id} className="group relative">
                  <div
                    key={product.images.edges[0].node.id}
                    className={classNames(
                      'relative',
                      'lg:col-span-2 lg:row-span-2 h-96',
                      'rounded-2xl'
                    )}
                  >
                    <Image
                      src={product.images.edges[0].node.transformedSrc}
                      alt={product.images.edges[0].node.altText!}
                      layout="fill" // required
                      objectFit="cover" // change to suit your needs
                      className="h-full rounded-2xl"
                    />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <Link href={`/tm`}>
                      <a>
                        <span className="absolute inset-0" />
                        {product.title}
                      </a>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    ${product.priceRange.minVariantPrice.amount}
                  </p>
                  <ul
                    role="list"
                    className="mt-auto pt-2 flex items-center space-x-3"
                  >
                    {_.uniq<GetProduct_productByHandle_variants_edges_node_selectedOptions>(
                      options.concat.apply(
                        [],
                        product.variants.edges.map(({ node }) =>
                          node.selectedOptions.filter((s) => s.name === 'Color')
                        )
                      )
                    )
                      .map(({ value }) => value)
                      .map((value) => (
                        <li
                          key={value}
                          className={`w-4 h-4 rounded-full border border-black border-opacity-10 ${
                            Colors[(value.toLowerCase() as keyof Colors) || 0]
                          }`}
                        >
                          <span className="sr-only">{value}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
<Link href={`/tm`}>             
 <a
            
                className="block text-sm font-semibold text-black hover:text-black"
              >
                Browse all favorites<span aria-hidden="true"> &rarr;</span>
              </a>
</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
