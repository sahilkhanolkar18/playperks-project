import React from "react";
import "./snippet.css";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Snippet = () => {
  const codeSnippet = `public void FetchDataOnDemand()
  {
    StartCoroutine(FetchCouponData());
  }
`;
  const codeSnippet2 = `// <summary>
/// You can call this function anywhere you want to show the coupon
/// </summary>
public void ActivateCoupon()
{
  api.FetchDataOnDemand();
  couponPanel.SetActive(true);
}
`;
  return (
    <div className="snippets-container">
      <h2 className="snippet-heading">Steps to use Unity Package:</h2>
      <p className="snippet-para">
        1. Download unity package. Download{" "}
        <a
          href="https://drive.google.com/file/d/1lu12X09bf7UDe11XY0BKO9UnOvi6kQvY/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          Link
        </a>
        .
      </p>
      <p className="snippet-para">2. Import unity package.</p>

      <p className="snippet-para">
        3.In scenes folder open SampleScene there you can see coupon example.
      </p>
      <p className="snippet-para">
        4. You can also make changes in coupon UI and the properties you want to
        show on the coupon.
      </p>
      <p className="snippet-para">
        5.{" "}
        <SyntaxHighlighter language="csharp" style={monokaiSublime}>
          {codeSnippet}
        </SyntaxHighlighter>
      </p>

      <p className="snippet-para">
        6. Call this function from API_Data_Fetch() call this function anywhere
        you want to display the coupon for ex. After level complete or after any
        special task completion.
      </p>
      <p className="snippet-para">
        7. And to show coupon you can set that panel active and call this
        function like this:
        <SyntaxHighlighter language="csharp" style={monokaiSublime}>
          {codeSnippet2}
        </SyntaxHighlighter>
      </p>
      {/* <p className="snippet-para"> 8. Coupon Example:</p>
      <img src={Image1} className="snippet-image" /> */}
    </div>
  );
};

export default Snippet;
