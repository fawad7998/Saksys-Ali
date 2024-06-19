import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const products = [
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-blue-500 to-teal-500",
  },
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-purple-500 to-blue-500",
  },
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
];

const Home = () => {
  const data = {
    labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        label: "Deposit",
        data: [15, 20, 35, 45, 25, 30, 40],
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Withdraw",
        data: [20, 15, 30, 40, 35, 25, 45],
        borderColor: "green",
        fill: false,
      },
      {
        label: "Send Money",
        data: [10, 25, 20, 35, 30, 45, 50],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Deposit Money",
        data: [5, 30, 40, 55, 45, 35, 60],
        borderColor: "purple",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <section>
      <div className="grid grid-cols-4 mx-4 gap-5 pt-5">
        <div className="col-span-4 md:col-span-1 bg-blue-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./1.png" className="h-12 w-12" alt="Total Sale Icon" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">TOTAL SALE</p>
            <b className="text-slate-50 text-3xl tracking-wide">$25,652</b>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 bg-purple-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./2.png" className="h-12 w-12" alt="New Quote Icon" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">NEW QUOTE</p>
            <b className="text-slate-50 text-3xl tracking-wide">632</b>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 bg-sky-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./3.png" className="h-12 w-12" alt="Orders Icon" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">ORDERS</p>
            <b className="text-slate-50 text-3xl tracking-wide">686</b>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 bg-orange-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./4.png" className="h-12 w-12" alt="Products Icon" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">PRODUCTS</p>
            <b className="text-slate-50 text-3xl tracking-wide">22</b>
          </div>
        </div>
        {/*end */}

        <div className="col-span-4 md:col-span-1 space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-semibold">68</span>
              <span className="text-gray-500">Working Hours</span>
              <img src="./graph1.png" alt="Graph 1" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-semibold">1,506</span>
              <span className="text-gray-500">Conversations</span>
              <img src="./graph2.png" alt="Graph 2" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-semibold">7</span>
              <span className="text-gray-500">People</span>
            </div>
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar3"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar4"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar5"
              />
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Transactions History</h2>
            <span className="text-gray-500">05/21/2024 - 06/19/2024</span>
          </div>
          <Line data={data} options={options} />
        </div>
      </div>
      {/*end */}

      <div className="col-span-4 md:col-span-4 bg-white p-6 rounded-lg shadow-md mx-4 mt-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Latest Product
          </h2>
          <div className="space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-300 rounded-lg hover:bg-gray-400">
              New
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-300 rounded-lg hover:bg-gray-400">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-300 rounded-lg hover:bg-gray-400">
              Completed
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-r p-6 rounded-lg shadow-md hover:-translate-y-1 duration-200"
              style={{ background: product.buttonColor }}
            >
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src={product.img}
                  alt="Product"
                />
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {product.title}
                  </h3>
                  <p className="text-white">{product.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white text-sm">{product.views} Views</p>
                <p className="text-white text-sm">{product.lastSale}</p>
                <p className="text-white text-sm">{product.sales}</p>
                <p className="text-white text-sm">{product.rating}</p>
                <a
                  href={product.link}
                  className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-opacity-20 bg-black rounded hover:bg-opacity-30"
                >
                  {product.comments}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
