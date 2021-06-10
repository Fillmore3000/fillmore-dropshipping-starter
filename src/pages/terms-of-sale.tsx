function TermsPage() {
  return (
    <div className="pb-6 md:pb-12">
       <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">What’s your return policy?</h1></section>
      <p>
        We don’t offer returns and exchanges, but if there’s something wrong
        with your order, please let us know by contacting us at {" "}
        <a
          href="mailto:info@fillmore-xr.com"
          title="contact us"
          target="_blank"
          rel="noopener noreferrer"
        >
         info@fillmore-xr.com
        </a>{" "}
      </p>

      <h2 className="text-3xl mb-3 home-3">Do you offer refunds?</h2>
      <p>
        Refunds are only offered to customers that receive the wrong items or
        damaged items. If any of these apply, please contact us at <br/>{" "}
        <a
          href="mailto:info@fillmore-xr.com"
          title="contact us"
          target="_blank"
          rel="noopener noreferrer"
        >
         info@fillmore-xr.com
        </a>{" "} with photos of wrong/damaged items and we’ll sort
        that out for you.
      </p>

      <h2 className="text-3xl mb-3 home-3">Can I exchange an item for a different size/color?</h2>
      <p>
        At this time, we don't offer exchanges. If you’re unsure which size
        would fit better, check out our sizing charts—we have one for every item
        listed on our store, in the product description section. Though rare,
        it's possible that an item you ordered was mislabelled. If that’s the
        case, please let us know at {" "}
        <a
          href="mailto:info@fillmore-xr.com"
          title="contact us"
          target="_blank"
          rel="noopener noreferrer"
        >
         info@fillmore-xr.com
        </a>{" "} within a
        week after receiving your order. Include your order number and photos of
        the mislabeled item, and we’ll send you a new one, or issue a refund!
      </p>
    </div>
  );
}

export default TermsPage;
