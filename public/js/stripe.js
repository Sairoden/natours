/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
// import { loadStripe } from "@stripe/stripe-js";

const stripe = Stripe(
  "pk_test_51IshInIIa7y3j6hOcZbrG4fdVpIAmPPPJp4WK2i3aDQWv9RJzKufUZEhT5XpS9iUVL9yCudcYyzOtYFOn4XpF2VH00MYku2uBg"
);
export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
