import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Amazing Features</div>
      <div className="title-small">
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
              Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile.png" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
            Blockchain security is a comprehensive risk management system for a 
            blockchain network, using cybersecurity frameworks, assurance services 
            and best practices to reduce risks against attacks and fraud.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
            In the blockchain, decentralization alludes to the transfer of supervision 
            and decision-making from a centralized association (individual, corporation, 
            or group of people) to a dispersed network. Decentralized networks endeavor 
            to decrease the degree of trust that members should put in each other and 
            dissuade their capacity to put forth authority or command over each other 
            in a manner that corrupts the potency of the network.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
            A distributed ledger is a type of database that is shared, 
            replicated, and synchronized among the members of a decentralized 
            network. The distributed ledger records the transactions, such as 
            the exchange of assets or data, among the participants in the network.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
