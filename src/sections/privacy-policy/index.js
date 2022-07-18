import React from "react";
import { styled } from "@mui/material/styles";
import {
  policyContent,
  BasicInfo,
  link,
} from "../../constants/PrivacyPolicyData";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title : {
    margin:'50px 0 50px 0',
    fontSize:'14px',
  },
  subTitle:{
    fontSize:'14px',
  }
})

const Container = styled("div")(({ theme }) => ({
  height: "88vh",
  maxHeight: "fit-content",
}));

const View = styled("div")(({ theme }) => ({
  maxWidth: "66ch",
  margin: "auto",
  padding: "20px",
}));

const Title = styled("div")(({ theme }) => ({
  fontSize: "calc(30px * 0.85)",
  textAlign: "center",
  fontWeight: "400px",
  margin: "0 0 15px",
  letterSpacing: "0.0em",
}));

const InfoList = styled("li")(({ theme }) => ({
  margin: "0 0 50px",
  // fontSize: "17px",
}));

// const InfoPoints = styled("li")(({ theme }) => ({
//   margin: "0 0 px",
//   fontSize: "17px",
// }))

const ParaGraph = styled("p")(({ theme }) => ({
  margin: "0 0 50px",
  fontSize: "14px",
}));

const subHeading = `The information as specified in Clause 1, may be used by the Company for the
    following purposes:`;
const Infocontent = [
  `for Your registration, login, and management of account on the Platform;`,
  `to confirm Your identity directly and/or through third parties;`,
  `to provide You Services and improve the Services;`,
  `remembering Your Personal Information so that You are not required to re-enter it the next time You visit the Platform;`,
  `to understand Your preferences and to enhance and customize Your experience of using the Service and the Platform;`,
  `for providing customized user relevant suggestion / Services;`,
  `to communicate with You through mail, e-mail, and telephone or through any other mode of communication, in connection with the Service, or other products or services of the Company;`,
  `to respond to Your comments, requests, reviews, and questions and provide better Services;`,
  `to enforce, communicate important notices, updates, or changes in the Services, use
    of the Platform and the terms/policies including Terms which govern the
    relationship between You and the Company;`,
  `to detect, prevent and protect Us from any errors, fraud or other criminal or
    prohibited activity on the Platform;`,
  `for internal purposes such as auditing, data analysis, research and improvement
    relating to the Platform or the Service;`,
  `for promotion and marketing purposes;`,
  `for sharing such information with any third party, including any service providers
    and any of Our group companies, in the course of providing the Services through
    the Platform;`,
  `to help promote a safe service on the Platform and protect the security and integrity
    of the Platform, the Services, and the users; and`,
  `to transfer data to the regulatory authorities or other appropriate authorities as
    required by law.`,
];

function PrivacyPolicy() {

  const classes = useStyles()



  return (
    <Container>
      <View>
        <Title>Privacy policy</Title>
        <div>
          <ParaGraph className={classes.subTitle}>
            <strong>
              Petpai Technologies Private Limited (“Company” "We", "Us", or
              "Our")
            </strong>{" "}
            a private limited company with its registered office at 3rd floor,
            Eros City square Mall (sector49,Gurgaon) operates the website{" "}
            {link("www.vetic.in", "www.vetic.in")} (hereinafter referred to as
            the
            <strong> "Platform"</strong>). The Company is committed to
            protecting Your privacy and the information that You share while
            using the Platform. We value the trust You place in Us. That’s why
            We maintain the highest security standards for securing the
            transactions and Your information.
          </ParaGraph>
          <ParaGraph className={classes.subTitle}>
            This privacy policy <strong>(“Privacy Policy”)</strong> specifies
            the manner in which personal data and other information is
            collected, received, stored, processed, disclosed, transferred,
            dealt with, or otherwise handled by the Company. This Privacy Policy
            does not apply to information that You provide to, or that is
            collected by, any third-party through the Platform, and any
            Third-Party Sites (defined below) that You access or use in
            connection with the Services offered on the Platform.
          </ParaGraph>
          <ParaGraph className={classes.subTitle}>
            Please read the Privacy Policy carefully prior to using or
            registering on the Platform or accessing any material, information
            or availing any Services through the Platform.
          </ParaGraph>
          <ParaGraph className={classes.subTitle}>
            By visiting the Platform or setting up/creating an account on the
            Platform for availing the Services and clicking on the “I accept”
            button provided on the Platform, You{" "}
            <strong>(“You”, “Your”, “Yourself”</strong> as applicable) accept
            and agree to be bound by the terms and conditions of this Privacy
            Policy and consent to the Company collecting, storing, processing,
            transferring, and sharing information including Your Personal
            Information in accordance with this Privacy Policy. This Privacy
            Policy is incorporated into and subject to our{" "}
            {link("/terms-of-service", "Terms of Service")}
            <strong> (“Terms”)</strong> and shall be read harmoniously and in
            conjunction with them. All capitalised terms used herein however not
            defined under this Privacy Policy shall have the meaning ascribed to
            them under the Terms.
          </ParaGraph>
          <ParaGraph className={classes.subTitle}>
            This Privacy Policy (i) will be considered to be an electronic
            record under the Indian data privacy laws including the Information
            Technology Act, 2000 read with rules and regulations made
            thereunder; and (ii) will not require any physical, electronic, or
            digital signature by the Company.
          </ParaGraph>
          <div>
            <ol className={classes.title}>
              <InfoList >
                <strong>Collection of information</strong>
              </InfoList>
            </ol>
            <ul>
              <InfoList className={classes.subTitle}>
                You may provide or the Company may collect certain
                <strong> personal information </strong> while You register on
                the Platform and/or use the Services. This includes: (a) Your
                name, electronic mail address, password, IP address, billing
                address, shipping address and other relevant details; (b) Your
                content, received, uploaded or posted using the Platform,
                including messages, images, videos and feedback; (c) any
                information provide by You while availing customer support, and
                (d) information You choose to upload, sync or import from the
                device on which the Platform is being used (collectively
                “Personal Information”). All information disclosed by You on the
                Platform shall be deemed to be shared willingly by You and
                without any coercion. No liability pertaining to the
                authenticity, genuineness, misrepresentation, fraud, negligence,
                etc. of the information disclosed by You shall lie on the
                Company.
              </InfoList>
              <InfoList className={classes.subTitle}>
                The Company may collect non-personal information relating to
                Your activities while accessing the Service or other information
                from and about the devices through which the Platform is used
                including SDK/API/JS code version, browser, internet service
                provider, operating system, browser type, cookie information,
                timestamp, application identifier, application version,
                application distribution channel, independent device identifier,
                Android ad master identifier, network card (MAC) address, and
                international mobile device identification code (IMEI), the
                equipment model, the terminal manufacturer, the terminal device
                operating system version, the session start / stop time,
                location, language, the time zone and the network state (WiFi
                and so on).
              </InfoList>{" "}
              <InfoList className={classes.subTitle}>
                In addition to the profile information, You may also tell us
                Your exact location if You choose to enable Your computer or
                mobile device to send us location information. The Company may
                use and store information about Your location to provide
                features of the Service to You and to improve and customize the
                Service and provide location based Services to You. You can
                withdraw Your consent at any time by disabling the
                location-tracking functions on Your mobile. However, this may
                affect Your enjoyment of certain functionalities on the
                Platform. In addition to the above, We identify and use Your IP
                address to also help diagnose problems with Our server, resolve
                such problems and administer the Platform. Your IP address is
                also used to help identify You and to gather broad demographic
                information.
              </InfoList>
              <InfoList className={classes.subTitle}>
                Our servers automatically record information{" "}
                <strong>("Log Data")</strong> created by Your use of the Service
                through the Platform. Log Data may include information such as
                Your IP address, operating system, the referring web page, pages
                visited, location, Your mobile carrier, device and application
                IDs, search terms and the manner of Your interaction with links
                across the Platform, including email notifications, by clicking
                redirecting links or through other means. The Company receives
                Log Data when You interact with the Service. The Company uses
                Log Data to provide Service, to measure, customize, and improve
                the Service, and to aid a better user experience. We may also
                collect data using web beacons, tags, or pixels.
              </InfoList>
              <InfoList className={classes.subTitle}>
                When payment information is being transmitted on or through the
                Platform, it will be protected by encryption technology. In case
                You make any payment on the Platform in relation to the Service,
                You understand and acknowledge that the Company only facilitates
                the processing of such payment by third-party payment gateway
                and all financial information including bank account details is
                collected by such third-party payment gateway and not by the
                Company. You expressly consent to the sharing of Your
                information with third party service providers, including
                payment gateways, to process payments and manage your
                payment-related information. Hence, the Company cannot guarantee
                that transmissions of Your payment-related information or
                Personal Information will always be secure or that unauthorized
                third parties will never be able to defeat the security measures
                taken by the Company or the Company’s third-party service
                providers. The Company will not be liable for any acts or
                omissions on the part of the payment gateway. You should view
                the terms of service and the privacy policy of such third-party
                payment gateway prior to disclosing any sensitive personal
                information to such third-party payment gateway.
              </InfoList>
            </ul>
            <ol className={classes.title}>
              <InfoList>
                <strong>Usage of information</strong>
              </InfoList>
            </ol>
            <ParaGraph>{subHeading}</ParaGraph>
            <ul>
              {Infocontent.map((item, index) => (
                <li className={classes.subTitle}>{item}</li>
              ))}
            </ul>
            <ParaGraph>
              {" "}
              The data gathered from You may also be used for any reason
              incidental to the reasons listed above; and for any other purpose
              with Your consent. We use Your Personal Information to send You
              promotional emails, however, We will provide You the ability to
              opt-out of receiving such emails from Us. However, You will not be
              able to opt-out of receiving administrative messages, customer
              service responses or other transactional communications. Unless
              and until, You explicitly give Your consent to Us, to do so, We
              will not share Your Personal Information with another user of the
              Platform and vice versa.{" "}
            </ParaGraph>
          </div>
          {policyContent.map((data, index) => (
            <div key={index}>
              <ol className={classes.title}>
                <InfoList>
                  <strong >{data.title}</strong>
                </InfoList>
              </ol>
              {data.content && data.content.length === 1 ? (
                <ParaGraph>{data.content[0]}</ParaGraph>
              ) : (
                <ul className={classes.subTitle}>
                  {data.content.map((a) => {
                    return <InfoList>{a}</InfoList>;
                  })}
                </ul>
              )}
              {data.information && <ParaGraph>{data.information}</ParaGraph>}
            </div>
          ))}
          {BasicInfo.map((data, index) => (
            <div key={index}>
              <ol className={classes.title}>
                <InfoList>
                  <strong >{data.title}</strong>
                </InfoList>
              </ol>
              {data.content.map((item, index) => (
                <ParaGraph key={index} className={classes.subTitle}>{item}</ParaGraph>
              ))}
            </div>
          ))}
        </div>
      </View>
    </Container>
  );
}

export default PrivacyPolicy;
