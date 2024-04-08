function CartOverview() {
  return (
    <div className="px-4 py-4 bg-stone-800 text-stone-200 uppercase sm:px-6 text-sm md:text-base">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
