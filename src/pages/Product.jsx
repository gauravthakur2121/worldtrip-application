import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldTrip.</h2>
          <p>
          Trip.com is an international one-stop travel service provider, available in 24 languages across 39 countries and regions in 35 local currencies.
Trip.com has an extensive hotel and flight network consisting of more than 1.1 million hotels and flights from over 510 airlines covering 3,400 airports in 220 countries and regions around the globe.
Trip.com's world-class 24/7 multilingual customer support, as well as additional centers in Edinburgh, Tokyo, and Seoul, help to "create the best travel experience" for its millions of customers worldwide. To book your next trip, visit Trip.com.

          </p>
          <p>
          Incredible Deals
We've searched high and low to bring to make sure you never pay too much
Travel Worry-free
Our service guarantee means that we've always got your back
Secure payment
          </p>
        </div>
      </section>
    </main>
  );
}
