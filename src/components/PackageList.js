import React from 'react';

function PackageList({ onSelect }) {
  const packages = [
    { id: "investment", name: "Investment Trek", image: "https://www.tickertape.in/blog/wp-content/uploads/2023/01/26-jan-23-Where-To-Invest-Money-In-India-27.png", description: "Investment Trek is a financial journey designed to explore global investment opportunities, market trends, and economic strategies. It involves analyzing stock markets, understanding international financial conditions, and identifying profitable investment sectors.One example of an Investment Trek was conducted by Lunt Capital Management, where they traveled across 24 countries in 100 days, meeting with central banks, stock exchanges, and financial experts to gain insights into international investing. Their approach emphasized sector rotation, country-specific investment strategies, and factor-based investing to optimize portfolio performance.Additionally, some platforms like Trek focus on making stock trading more accessible, particularly for younger investors. They provide educational resources, real-time market data, and simplified trading experiences to encourage hassle-free investing." },
    { id: "crypto", name: "Crypto Cruise", image: "https://penntoday.upenn.edu/sites/default/files/2021-11/top-crypto.jpeg", description: "Cryptocurrency is a decentralized digital currency secured by cryptography, making it resistant to counterfeiting or manipulation. Unlike traditional fiat currencies issued by governments, cryptocurrencies operate on blockchain technology—an immutable ledger that records transactions transparently and securely." },
    { id: "savings", name: "Savings Safari", image: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/importance-of-having-savings-717x404.jpg", description: "Savings Safari is a direct-mail savings magazine based in Brevard County, Florida. It delivers local discounts and coupons to households every two weeks, helping businesses reach customers while offering savings to readers" },
    { id: "budget", name: "Budget Backpack", image: "https://www.gep.com/prod/s3fs-public/blog-images/how-budget-to-pay-solves-4-problems-between-finance-and-procurement.jpg", description: "Budget finance refers to the management of financial resources within a set budget, ensuring efficient allocation and spending. It plays a crucial role in personal finance, corporate financial planning, and government fiscal policies" },
  ];

  return (
    <div className="package-list">
      {packages.map(pkg => (
        <div key={pkg.id} className="package-item" onClick={() => onSelect(pkg.id)}>
          <div className="package-image-container">
            <img src={pkg.image} alt={pkg.name} className="package-image" />
          </div>
          <div className="package-info">
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PackageList;