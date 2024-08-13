// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just 500 rs/month.
          </h2>
          <p>
          Trip.com has an extensive hotel and flight network consisting of more than 1.1 million hotels and flights from over 510 airlines covering 3,400 airports in 220 countries and regions around the globe.
          
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
