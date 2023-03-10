const data = {
  basic: {
    name: "Basic subscription",
    price: "$14.99",
    description:
      "Do you need a perfect desicion for your personal usage? Then basic level is perfect for you. Still at reasonable price and already enough power",
  },
  standard: {
    name: "Standard subscription",
    price: "$24.99",
    description:
      "Ideal product for families, small companies or for a demanding personal usage. Comes with much more available space and media analyse",
  },
  business: {
    name: "Business subscription",
    price: "$64.99",
    description:
      "Most powerful solution for big enterprises. The only version that supports voice assistance",
  },
};
const validSubscriptions = ["basic", "standard", "business"];

const subscriptionName = document.getElementById("subscription-name");
const subscriptionPrice = document.getElementById("subscription-price");
const subscriptionDescription = document.getElementById(
  "subscription-description"
);

// Get the URLSearchParams object for the current URL
const searchParams = new URLSearchParams(window.location.search);

// Get the value of the "subscription" parameter
const subscription = searchParams.get("subscription"); // returns level of sub

if (validSubscriptions.includes(subscription)) {
  let subscriptionData = data[subscription];
  subscriptionName.innerHTML = subscriptionData.name;
  subscriptionPrice.innerHTML += " " + subscriptionData.price + "/month";
  subscriptionDescription.innerHTML = subscriptionData.description;
  const payButton = document.getElementById("pay-button");

  payButton.addEventListener("click", () => {
    alert(
      `You purchased ${subscriptionData.name} for ${subscriptionData.price}`
    );
  });
} else {
  window.location.href = "/products.html";
}
