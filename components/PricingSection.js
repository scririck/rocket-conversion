import moment from 'moment';
import 'moment-timezone';
import { ProfilePic, SpecialTitle, PricingTable } from "./Utilities"

export default function PricingSection() {
  const now = new Date();
  const prevDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()-3);
  const latestDate = moment(prevDate).format("MMM Do YYYY");
  return (
    <section id="pricing" className="section">
      <div className="main-title">
        <SpecialTitle 
          pretitle="STOP LEAVING (HEAPS OF) MONEY ON THE TABLE"
          title="Get your Rocket Conversion
          checklist NOW!"
          h={2}
        />
        <div className="price-card">
          <div className="header">
            <div className="title">E-COMMERCE CHECKLIST</div>
            <div className="subtitle">“The most comprehensive conversion list on the planet.”</div>
          </div>
          <div className="body">
            <PricingTable
              original={109.99}
              current={39.99}
            />
            <div className="title">Get a checklist that covers:</div>
            <ul>
              <li>Direct Marketing</li>
              <li>Google Ads + Facebook Ads</li>
              <li>Unique Offer</li>
              <li>Conversion Rate Optimization</li>
              <li>Business Development</li>
              <li>Work Organization</li>
              <li><strong>FREE BONUS</strong> Know your Numbers (CPA calculator)</li>
            </ul>
            <div className="info">
              <p>Included: <strong>100 critical conversion checkpoints</strong></p>
              <p>Checklist last updated: <strong>{latestDate}</strong></p>
              <a className="cta" href="https://buy.stripe.com/00g02dbBKcum3lefYY">
                <span>Buy my Rocket Conversion List Now!</span>
              </a>
              <div class="pay-info">
                <p>You will be redirected to Stripe where you can pay with:</p>
                <img src="/images/logos1.png"/>
                <p>After payment, you will get your spreadsheet <b>immediately</b>.</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>Do you want to share the Checklist with your clients?</p>
            <p><a className="link" href="https://buy.stripe.com/14k8yJbBKfGy4piaEF">Purchase the extended license for just €149.99</a></p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/norton.png"/>
        
      </div>
    </section>
  )
}
