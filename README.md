## Goals

* Develop the front-end of an e-commerce website using React.js
* Create a Database of User Accounts
	A User should be able to:
  	* See a list of all the products on the page (including featured products at the top)
  	* Navigate to a page for any of the products that displays the product's
  	  ** Name
      ** Images
      ** Price
      ** Description
      ** Add to cart button
    * Add multiple products to their cart
    * Be able to navigate to their cart where you can see:
      ** A list of all the products added with name, picture, and price
      ** A subtotal of the price of all the products
    * Checkout via a checkout form which will include the following delivery information:
      ** Full name
      ** Street address
      ** City
      ** State
      ** Zipcode

## Pages

  * Home Page (Splash page of what the store sells)
  * About Page(?) (Description of what the company is all about)
  * Gallery Page (Displays a gallery of all the products being sold)
  * Product Page (Page for each specific product)
  * Cart Page (Displays all the items in the user's cart with the subtotal)
  * Checkout Page (Page of a form with inputs for address)
  * Contact Page
  * Error Page (404)

## Components  

  * checkoutForm (props include : onSubmit event)
  * shoppingCart (props include : products)
  * galleryList (props include: products)
  * product (props include: product)

## Inspiration

* Whalebone Shop (https://shopwhalebone.com/)
* Seavees (https://www.seavees.com/)

## Additional Information

* The backend server and api client were provided by William O'Beirne

* Read the [Wiki](https://github.com/wbobeirne/nycda-ecommerce-server/wiki) for
more information.
