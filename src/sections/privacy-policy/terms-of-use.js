import React from "react";
import { styled } from "@mui/material/styles";
import {
  ParaGraphArray,
  collectionOfInformation,
  policyContent,
  BasicInfo,
  link,
} from "../../constants/PrivacyPolicyData";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  subTitle: {
    marginBottom: "50px"
  },
  point: {
    margin: "0px"
  },
  bottomSpace: {
    marginBottom: '30px'
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
  fontSize: "30px",
  textAlign: "center",
  fontWeight: "400px",
  margin: "0 0 15px",
  letterSpacing: "0.0em",
}));

const InfoList = styled("li")(({ theme, underline, marginTop }) => ({
  margin: "0 0 50px",
  fontSize: "16px",
  textDecoration: underline && "underline",
  marginTop:marginTop && '30px'
}));

const OrderedList = styled("ol")(({ theme }) => ({
  margin: "0 0 15px",
  fontSize: "16px",
}));

const ParaGraph = styled("p")(({ theme }) => ({
  margin: "0 0 45px",
  fontSize: "16px",
}));


// ------------------------------------first para----------------------------------------------------
const firstPara = () => {
  return (
    <>
      {
        <p>
          Vetic is owned by{" "}
          <strong>Petpai Technologies Private Limited,</strong> licensed and
          managed by{" "}
          <strong>
            Petpai Technologies Private Limited. Petpai Technologies Private
            Limited (“Company”, “We”, “Us”, or “Our”)
          </strong>{" "}
          is a private limited company having its registered office at 3rd
          floor, Eros City square Mall (sector49,Gurgaon)operates the website
          www.vetic.in (collectively hereinafter referred to as the{" "}
          <strong>“Platform”</strong>). These Terms of Service (“Terms”) govern
          Your access to and use of the Platform and the Services (as defined
          below) made available on the Platform. By accessing the Platform and
          using the Service, You agree to these Terms. Your access to and use of
          the Service is conditioned on Your acceptance of and compliance with
          these Terms and other policies of the Platform. The Company requests
          You, the users of the Platform{" "}
          <strong>(“User”, “You”, “Your”)</strong>, to please read these Terms
          and all other policies of the Platform{" "}
          <strong>(“Platform Policies”)</strong> carefully before using or
          registering on the Platform. By clicking on the “I accept” button
          provided, You accept this Terms and Platform Policies and agree to be
          legally bound by the same. If You do not agree with these Terms or any
          other Platform Policies, please do not access the Platform and use the
          Service.
        </p>
      }
    </>
  );
};


// -------------------------------------------second para---------------------------------------
const secondPara = () => {
  return (
    <>
      {
        <p>
          The Company provides the service of: (i) offering for sale various pet
          care products including food, medicines, toys, accessories for pets on
          the Platform <strong>(“Product(s)”)</strong>, and (ii) facilitating
          veterinary teleconsultation for pets through veterinarians listed on
          the Platform
          <strong>(“Consultants”)</strong> (collectively the{" "}
          <strong>“Services”</strong>).
        </p>
      }
    </>
  );
};


// --------------------------------------third para ------------------------------------------------
const thirdPara = () => {
  return (
    <>
      {
        <p>
          These Terms: (i) will be considered to be an electronic record under
          the Indian data privacy laws including the Information Technology Act,
          2000 read with rules and regulations made thereunder; and (ii) will
          not require any physical, electronic, or digital signature by the
          Company.
        </p>
      }
    </>
  );
};



//---------------------------------------------TermsAndCondition------------------------------------
function TermsAndCondition() {

  const classes = useStyles()

  const useOfService = () => {
    return (
      <>
        {
          <>
            In order to use the Service, You are required to create an account
            on the Platform by providing certain details about yourself, such as
            Your name, email address and such other details as may be required
            by the Platform <strong>(“Account”)</strong>.
          </>
        }
      </>
    );
  };

  const accessAndUseOfService = () => {
    return (
      <>
        {
          <>
            You shall ensure and confirm that the Account information provided
            by You is complete, accurate and up-to-date. If there is any change
            in the Account information, You shall promptly update Your Account
            information on the Platform or by writing to the Company at{" "}
            <a href="mailto:support@vetic.in" target="_blank">
              support@vetic.in)
            </a>{" "}
            . If You provide any information that is untrue, inaccurate, not
            current or incomplete (or becomes untrue, inaccurate, not current or
            incomplete), or if the Company has reasonable grounds to suspect
            that such information is untrue, inaccurate, not current or
            incomplete, the Company has the right to suspend or terminate Your
            Account and refuse any and all current or future use of the Service
            (or any portion thereof) at its discretion, in addition to any right
            that the Company may have against You at law or in equity, for any
            misrepresentation of information provided by You.
          </>
        }
      </>
    );
  };

  const transactionText = (text) => {
    return (
      <>
        All transactions shall be in Indian Rupees <strong>(“INR”)</strong>{" "}
        unless otherwise specified at the time of purchase.
      </>
    );
  };

  const paymentPoint = () => {
    return (
      <>
        All payments for the Services or Products purchased by You through the
        Platform, shall be made by using a valid payment mode through the
        applicable third party payment provider (the payment provider as
        selected by the Company) <strong>(“Payment Details”)</strong>. You
        hereby represent that You have the authority to use such payment mode
        and have sufficient funds to complete the Services. By providing such
        details, You represent, warrant, and covenant that: (1) You are legally
        authorized to provide such details; (2) You are legally authorized to
        perform payments using such details; and (3) such action does not
        violate the terms and conditions applicable to Your use of such details
        or applicable law. You must provide the third party payment provider
        with valid payment information (Visa, MasterCard, or other issuer
        accepted by the payment provider). You acknowledge and agree that the
        Company does not operate, own, or control the payment provider and only
        facilitates the third-party payment gateway for processing of payment.
        Your use of Your payment card is governed by Your agreement with and the
        privacy policy of the payment provider and not these Terms. You agree to
        immediately notify the payment provider of any change in Your billing
        address (or other information) for Your payment method. In the event You
        opt for ‘cash on delivery’ for the purchase of Products through the
        Platform, it will be governed by the specific cash on delivery policy of
        the Platform.
      </>
    );
  };

  const paymentFeeSection = () => {
    return (
      <>
        Except to the extent otherwise required by applicable law, the Company
        is not liable for any payments authorized{" "}
        <span style={{ textDecoration: "underline" }}>through</span> the
        Platform using Your Payment Details. Particularly, the Company is not
        liable for any payments that do not complete because: (1) Your bank
        account or any other payment did not contain sufficient funds to
        complete the transaction; (2) You have not provided the Company with
        correct Payment Details; (3) Your payment card has expired; or (4)
        circumstances beyond the Company’s control (such as, but not limited to,
        power outages, interruptions of cellular service, or any other
        interferences from an outside force) prevent the execution of the
        transaction.
      </>
    );
  };

  const veticMailLink = () => {
    return (
      <a href="mailto:support@vetic.in" target="_blank">
        support@vetic.in)
      </a>
    );
  };

  const copyrightText = () => {
    return (
      <>
        The Company responds to notices of alleged copyright infringement and
        terminate access to the Platform for repeat infringers. If You believe
        that materials on the Platform infringe copyright, please send the
        following information to the Company at {veticMailLink()} :
      </>
    );
  };

  const privacyPolicyContent = () => {
    return (
      <>
        Your privacy is important to us. Our Privacy Policy explains how We
        collect, use, handle and share personal information and other data.
        Please refer to Our Privacy Policy available at{" "}
        <a href="" target="_blank">
          Privacy Policy
        </a>
        .
      </>
    );
  };

  const terminationText = () => {
    return (
      <>
        {
          <>
            You may cancel Your Account at any time by writing to the Company at
            {veticMailLink()} . The Company reserves the right to terminate Your
            Account or block Your access to the Platform, at any time, for any
            reason, in its sole discretion. If You violate any of these Terms,
            Your permission to use the Platform automatically terminates.
          </>
        }
      </>
    );
  };

  const grivanceSecondText = () => {
    return (
      <>
        {
          <>
            Name of the Grievance Officer: Shivang Pandho{" "}
            <strong>(“Grievance Redressal Officer”)</strong>
          </>
        }
      </>
    );
  };

  const termsOfService = [
    // correct
    {
      title: "Eligibility and Access",
      content: [
        "The Service is not available to persons, under the age of 18 (eighteen) years or to any User suspended or removed from the Platform for any reason whatsoever. You represent that You are of legal age to form a binding contract and are not a person barred from using or accessing the Platform and receiving the Services by the Company or under the applicable laws of India.",
        "The Services are always evolving and the form and nature of the Services may change from time to time. In addition, the Company may stop (permanently or temporarily) providing the Service (or any features within the Platform) to You or to Users generally and may not be able to provide You with prior notice.",
      ],
    },
    {
      title: "Access and Use of Service",
      content: [
        useOfService(),
        accessAndUseOfService(),
        `You are responsible for maintaining the confidentiality of Your Account information and for all activities that occur on or in connection with Your Account. You agree to notify the Company immediately of any unauthorized access or use of Your Account or any other breach of security and ensure that You exit from Your Account at the end of each session. You acknowledge and agree that the Company is not responsible or liable for any damages, losses, costs, expenses, or liabilities related to any unauthorized access to or use of Your Account. You may be held liable for losses incurred by the Company or any other User of or visitor of the Platform due to authorized or unauthorized use of Your Account as a result of Your failure in keeping Your Account information secure and confidential.`,
        `You shall not have more than one active Account on the Platform. You are prohibited from selling, trading, or otherwise transferring Your Account to another party or impersonating any other person for the purpose of creating an Account with the Platform. The Company reserves the right to refuse access to the Service to new Users or to terminate access granted to existing Users at any time if such access or use of the Platform or the Service is found to be in breach of these Terms or Platform Policies or applicable laws or pursuant to any administrative or judicial order or direction by any governmental authority.`,
      ],
    },
    {
      title: "Services",
      content: [
        {
          heading: "Sale of Veterinary Products:",
          point: [
            `The Company lists various Products for sale on the Platform. Such listing of Products on the Platform is merely an ‘invitation to offer’ and not an ‘offer for sale’. The Products include over-the-counter medicines as well as prescription medicines. The Platform has duly obtained all licenses and registrations as may be required to undertake its business and abides by all the applicable laws including relating to the dispensing of prescription medicines.`,
            `By placing an order for the Products, You make an offer to the Company to buy such Products. We may accept or decline any order placed by You, in Our sole discretion, without any liability to You. We further reserve the right to limit the order quantity of any Products available on the Platform, without any prior notice.`,
            `All prescription medicines shall be sold and dispensed by a registered pharmacist at the Company.`,
            `In the event You order prescription medicines, You shall share a scanned copy of the valid prescription for the concerned animal, through such means as may be required by the Platform and such prescription shall be subject to the scrutiny and approval of Our registered pharmacist.`,
            `As a standard practice, You will be able to purchase a substitute medicine from the Platform, only if Your prescription contains the phrase “Allow substitution”, or mentions the name of the molecule. However, in the event the Platform does not have the exact medicine prescribed by Your veterinarian, the Platform may substitute a brand for another brand of the same medical salt as long as the composition & strength of the salts are an exact match, after receiving another prescription from a veterinary for such substitute medicine.`,
            `The drug information provided on the Platform is for informative purposes only and is not intended to provide diagnosis, treatment or medical advice. We are not liable for any consequence arising from Your reliance on such information on the Platform.`,
          ],
        },
        {
          heading: "Teleconsultation Services:",
          point: [
            `The Company facilitates veterinary teleconsultation for the pets through the Consultants, listed on the Platform. The Consultants may be listed on the Platform, either directly or through a third party. Platform enables the Users to connect with the Consultants through the Platform by various modes including video, or the telephonic service, as may be available on the Platform.`,
            `While We do check and authenticate the veterinarians listed on the Platform, You should independently also verify the credential of the Consultants and We are not liable for the same. Further, the Platform may have veterinarians from countries other than India, listed on the Platform, who may not be registered under the Indian laws to provide the veterinarian services. However, if You choose to procure the Services from such veterinarians, You hereby agree and acknowledge that consultation provided by such foreign Consultants is advisory in nature and should not be considered as a medical opinion.`,
            `You hereby agree and acknowledge that the Platform is an intermediary that facilitates the provision of veterinary teleconsultation services on the Platform and is in no manner involved in providing such teleconsultation services to You. The Consultants are independent professionals and such services are being provided solely by them to the relevant pet. Therefore, they are responsible for the teleconsultation services rendered to the patient and the Company or the Platform is not in any manner liable for the consultations provided by such Consultants through the Platform including diagnosis, prescription, medication, and treatment prescribed to the patient and/or for their compliance with applicable laws.`,
            `We do not endorse any specific Consultant on the Platform nor place any guarantee as to the quality of teleconsultation performed by them or provide any ratings for the Consultants through the Platform. Any such recommendations may be made by other Users of the Platform and the Company does not verify or acknowledge the same.`,
            `The Company shall not be liable for breach of confidentiality and privacy of Users by the Consultants and claims of any nature whatsoever arising out of the wilful misconduct and negligence (including gross negligence) of such Consultants.`,
            `The credentials of the Consultant and any description of their registrations/certifications, location, contact details, etc. displayed on the Platform, are as provided by the Consultant to the Company and the Company shall not in any manner, be responsible or liable for such information.`,
          ],
        },
        {
          heading:
            "You hereby expressly understand, acknowledge, and accept the following:",
          points: [
            "In case any prescription is being provided to You by a Consultant, the same is being provided basis the online consultation and the reports/information/details shared by You with the Consultant through the Platform. However, such prescription may vary when the patient is examined physically, hence, in no event shall the prescription provided by the Consultant be relied upon as a final and conclusive solution.",
          ],
        },
        {
          heading:
            "You agree to use the advice from a Consultant on the Platform pursuant to:",
          // use li
          subPoints: [
            "an ongoing treatment with the patient’s veterinarian;",
            "a condition which does not require emergency treatment, physical examination, or medical attention;",
            "medical history available as records with You for reference;",
            "a record of physical examination and report thereof with You, generated through local veterinarian of the patient; and",
            "consultation with local veterinarian of the patient before abandoning or modifying any ongoing treatment.",
          ],
          point: [
            `You agree that by using the Platform, the Consultant will not be conducting physical examination of the patient, hence, they may not have or be able to derive important information that is usually obtained through a physical examination. You hereby acknowledge and agree that You are aware of these limitations and agree to assume the complete risk of these limitations.`,
            `You agree that all details provided by You during the course of availing Services on the Platform will be honest, accurate and complete. You further acknowledge and understand that misrepresentation of information or not providing all or complete details in relation to or for availing the Services may lead to inaccurate diagnosis and treatment and consequently inaccurate prescription. You agree to indemnify and hold harmless the Company and its directors, officers, and agents from and against any and all claims, proceedings, losses, penalties, liabilities, and damages arising due to or in relation to Your breach of this Clause.`,
          ],
        },
      ],
    },
    {
      title: "Acceptable Use",
      content: [
        {
          //   heading: "",
          point: [
            `The Service permits You to buy the Products available on the Platform and/or to available veterinary teleconsultation provided by registered Consultants.`,
            `You represent and warrant that You shall not:`,
            // ``,
          ],
        },
        {
          heading: "upload, publish, transmit, update or share information",
          subPoints: [
            `that belongs to another person and to which You do not have any right;`,
            `that is, or that incites or encourages, action that is, explicitly or implicitly: illegal, harmful, abusive, insulting, harassing, threatening, hateful, racially or ethnically objectionable, derogatory, harmful to any reputation, disparaging, defamatory, libelous, pornographic, indecent, profane, obscene, pedophilic or otherwise objectionable (including nudity), blasphemous, invasive of another's privacy, including bodily injury, or relating or encouraging money laundering or gambling; and`,
            `that is patently false and untrue, and is written or published with the intent to mislead or harass a person, entity or agency for financial gains or to cause any injury to any person;`,
          ],
          points: [
            `violate any law, regulation, or court order;`,
            `violate, infringe, or misappropriate the intellectual property, privacy, publicity, moral or "droit moral," or other legal rights of any third party;`,
            `harms minors in anyway;`,
            `send advertising or commercial communications, including spam, or any other unsolicited or unauthorized communications;`,
            `send communication that deceives or misleads the addressee about the origin of such messages or communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact;`,
            `engage in spidering or harvesting, or participate in the use of software, including spyware, designed to collect data from the Platform, including from any User of the Platform;`,
            `transmit any virus, other computer instruction, or technological means intended to, or that may, disrupt, damage, or interfere with the use of computers or limit the functionality of any computer resource or related systems;`,
            `stalk, harass, threaten, harm or impersonate any third party;`,
            `participate in any fraudulent or illegal activity, including phishing, money laundering, or fraud;`,
            `use any means to scrape or crawl any part of the Platform;`,
            `attempt to circumvent any technological measure implemented by the Company, any of the Company’s service providers, or any other third party (including another User) to protect the Company, the Platform, Users, Recipients, or any other third party;`,
            `access the Platform to obtain information to build a similar or competitive application, or provide similar Services;`,
            `attempt to decipher, decompile, disassemble, or reverse engineer any of the software or other underlying code used to provide the Platform;`,
            `send communication that threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation; or`,
            `advocate, encourage, or assist any third party in doing any of the foregoing.`,
          ],
        },
      ],
    },
    {
      title: "Fees and Payment",
      content: [
        {
          // heading: "Fees and Payment",
          point: [
            {
              underlineHeading: "Fees",
              subPoint: `The fee for the Services and the Products is as specified on the Platform. You agree to pay all amounts due in accordance with the payment terms in effect when You purchase any Service or Products.`,
            },
            {
              underlineHeading: "Currency",
              subPoint: transactionText(),
            },
            {
              underlineHeading: "Payment",
              subPoint: paymentPoint(),
            },
            {
              underlineHeading: "Payment Questions",
              subPoint: `If You have a question about a purchase made on the Platform or a charge to Your payment card, please contact Us at support@vetic.in. The Company has the sole discretion to determine how billing disputes will be resolved.`,
            },
          ],
          bulletPoints: [
            paymentFeeSection(),
            `The Platform shall not be responsible for any unauthorised transactions conducted on Our Platform using Your payment card or internet banking. The Platform shall not be obligated to refund any money to You in such instances.`,
            `Additional shipping charges may be applicable on the Products purchased by You. Please refer the shipping charges policy for the applicable shipping charges.`,
            `Any and all cancellation of the orders placed by You shall be governed by the cancellation policy and all refunds will be governed by the refund policy.`,
          ],
        },
      ],
    },
    {
      title: "Ownership",
    },
    {
      title: "Copyright and Intellectual Property Policy",
      content: [
        {
          points: [
            {
              underlineHeading: "Take Down Notice:",
              subPoint: copyrightText(),
            },
          ],
          bulletPoints: [
            `Your address, telephone number, and email address;`,
            `a description of the work that You claim is being infringed, with adequate information to identify the work;`,
            `a description of the material that You claim is infringing and are requesting be removed along with information about where it is located or stored;`,
            `details establishing that the work which is the subject matter of infringement is being infringed, and details establishing that You are the owner or exclusive licensee of the work or agent of such owner or exclusive licensee;`,
            `an electronic or physical signature of the copyright owner (or a person authorized to act for the copyright owner);`,
            `details of the person, if known, who is responsible for uploading the work infringing Your copyright;`,
            `an undertaking that You shall file an infringement suit in the competent court against the person responsible for uploading the infringing copy and produce the orders of the competent court having jurisdiction, within a period of twenty-one days from the receipt of the take down notice by the Company; and`,
            `a statement by You, made under penalty of perjury, that the information You are providing is accurate and that You are the copyright owner or authorized to act on behalf of the copyright owner.`,
            `If You do not follow these requirements, Your notice may not be valid.`,
            `Termination Policy: If We determine that You are a repeat infringer, We may terminate Your access to the Platform, remove or ban You and/or terminate any Account created or controlled by You, and take other appropriate action in Our sole discretion.`,
          ],
        },
      ],
    },
    {
      title: "Privacy",

      paragraph: privacyPolicyContent(),
    },
    {
      title: "License to Use the Service and Platform",
      content: [
        {
          bulletPoints: [
            `Subject to compliance with the Terms, the Company hereby grants You a personal, royalty-free, limited, non-assignable and non-exclusive license to use the Service and the Platform. This license is for the sole purpose of enabling You to use and enjoy the benefit of the Service for Your personal and non-commercial use, in the manner permitted by these Terms. You agree not to use the Service for any public performances.`,
            `You may access the Service only in geographic locations within India.`,
            `You agree to use the Service only: (a) for purposes that are permitted by the Terms; and (b) in accordance with applicable law, regulation or generally accepted practices or guidelines. You agree not to engage in activities that may adversely affect the use or access of the Service by other Users.`,
            `You agree not to access (or attempt to access) the Service by any means other than through the interface that is provided by the Platform. You shall not use any deep-link, robot, spider or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Service or Company Content, or in any way reproduce or circumvent the navigational structure or presentation of the Platform, materials or any Company Content, to obtain or attempt to obtain any materials, documents or information through any means not specifically made available through the Service.`,
            `You agree that You are solely responsible to the Company and to any third party for any breach of Your obligations under the Terms and for the consequences (including any loss or damage which the Company or its affiliates may suffer) for any such breach.`,
          ],
        },
      ],
    },
    {
      title: "Third Party Content and Interactions",
      content: [
        {
          bulletPoints: [
            `With respect to the facilitation of the teleconsultation services on the Platform, the Company acts purely as an "intermediary" as defined under Information Technology Act, 2000 or as construed under equivalent local laws of Your jurisdiction and rules thereunder as applicable. The Company expressly excludes any kind of liability relating to any communication with any Consultant or third parties. Being an “intermediary”, the Company has no responsibility and / or liability in respect of any content uploaded on the Platform, including without limitations, for intellectual property rights infringement, defamation, illegal content, or any other violation under applicable laws. All content, which is hosted and transmitted on the Platform, is the sole responsibility of the person who provides, publishes, or posts such content.`,
            `The views expressed by Users on the Platform are not controlled by the Company, and do not represent the views or values of the Company. You acknowledge and agree that the Platform only facilitates access to telecommunication and the Company is not obligated to monitor access to or use of the Service by You or third parties. However, should it come to the knowledge of the Company that Your use of the Service is in violation of any applicable law or these Terms, then the Company has the right to enforce these Terms, and take such actions it may deem necessary to comply with applicable law, regulation, court order, or other legal, administrative, or regulatory request or process; or otherwise.`,
          ],
        },
      ],
    },
    {
      title: "Links",
      content: [
        {
          paragraph: `The Platform may contain links to social media platforms or third - party websites. You acknowledge and agree that the link does not mean that the Company endorses or is affiliated with such third platform or website. You further agree and acknowledge that the Company is not responsible or liable for (a) the availability or accuracy of such third - party platform or website; (b) the content, products, or services on or available from such websites or resources; or (c) for any damages, losses, costs, expenses, or liabilities related to Your use of the platform or website. You should always read the terms and conditions and privacy policy of a platform or website before using it. You acknowledge sole responsibility for and assume all risk arising from Your use of any such websites or resources.`,
        },
      ],
    },
    {
      title: "Changes to the Platform",
      content: [
        {
          paragraph: `You acknowledge and agree that the Company may change or discontinue any aspect of the Platform at any time, without giving any notice to You.`,
        },
      ],
    },
    {
      title: "Termination and Reservation of Rights",
      content: [
        {
          paragraph: terminationText(),
        },
      ],
    },
    {
      title: "Disclaimers and Limitations on Our Liability",
      content: [
        {
          bulletPoints: [
            `You acknowledge and agree that Your use of the Platform is at Your own risk and that the Platform is provided on an “as is” and “as available” basis. To the extent permitted by applicable law, the Company disclaim all warranties, conditions, and representations of any kind, whether express, implied, statutory, or otherwise, including those related to merchantability, fitness for a particular purpose, non-infringement, and arising out of or in the course of dealing with or usage of the Platform.`,
            `In particular, the Company make no representations or warranties about the accuracy or completeness of content available on or through the Platform, third party website linked to or integrated with the Platform, the Services or the Products. The Company does not warrant or endorse the effectiveness, quality or safety of the Products or Services available on the Platform. The Company disclaim all responsibility for any harm to the patients resulting from any Product/ Services available on the Platform.`,
            `You acknowledge and agree that the Company will have no liability for any: (i) errors, mistakes, or inaccuracies of Content; (ii) personal injury, property damage, or other harm resulting from Your access to or use of the Platform; (iii) any unauthorized access to or use of Our servers, any personal information, or User data; (iv) any interruption of transmission to or from the Platform; (v) any bugs, viruses, trojan horses, or the like that may be transmitted on or through the Platform; or (vi) any damages, losses, costs, expenses, or liabilities of any kind incurred as a result of any content posted or shared through the Platform.`,
            `You acknowledge and agree that when using the Platform, You will be exposed to content from a variety of sources, and that the Company is not responsible for the accuracy, usefulness, safety, legality, or intellectual property rights of or relating to any such content. You further understand and acknowledge that You may be exposed to content that is inaccurate, offensive, indecent, objectionable, or harassing, and You agree to waive, and hereby do waive, any legal or equitable rights or remedies You have or may have against any Company Party with respect thereto.`,
            `The Company shall not be responsible for the delay or inability to use Platform or related functionalities, the provision of or failure to provide functionalities, or for any information, software, functionalities, and related graphics obtained through the Platform, or otherwise arising out of the use of the Platform or Service, whether based on contract, tort, negligence, strict liability or otherwise. Further, the Company shall not be held responsible for non-availability of the Service during periodic maintenance operations or any unplanned suspension of access to Service that may occur due to technical reasons or for any reason beyond the Company’s control.`,
            `The Company shall not be liable for any deficiency of Services if any arises including but not limited to cancellation of order due to any unavailability of the Consultants. We shall not be liable for the general conduct of the Consultants, any unwarranted act performed by the Consultant or any advise or opinion given by the Consultant.`,
            `The Platform is only an intermediary with respect to the teleconsultation services and cannot be held liable for any dispute/claim/damages etc. that arise between the Consultant and the Users for whatsoever reason it may be.`,
            `The Company ensures that the pricing and availability of Products and Services on the Platform is accurate and up to date. However, rarely, there may be an error on the pricing of a Product/Service or an error related to Product availability. In such cases, We are not responsible for any typographical errors and We reserve the right to cancel the sale.`,
            `To the fullest extent permitted by applicable law, You acknowledge and agree that in no event will any Company Party be liable to You or to any third party for any indirect, special, incidental, punitive, or consequential damages (including for loss of profits, revenue, or data) or for the cost of obtaining substitute products, arising out of or in connection with these Terms, however caused, whether such liability arises from any claim based upon contract, warranty, tort (including negligence), strict liability, or otherwise, and whether or not the Company has been advised of the possibility of such damages.`,
            `To the maximum extent permitted by applicable law, the Company’s total cumulative liability to You or any third party under these Terms, including from all causes of action and all theories of liability, will be limited to and will not exceed the amount paid by You at the time of purchase of goods or purchase of Services on the Platform during, immediately preceding the date of the claim.`,
            `You agree that the limitations of damages set forth above are fundamental elements of the basis of the bargain between the Company and You.`,
          ],
        },
      ],
    },
    {
      title: "Violation of the Terms",
      content: [
        {
          paragraph:
            "You agree that any violation by You of these Terms will constitute an unlawful and unfair business practice, and will cause irreparable harm to the Company, for which monetary damages would be inadequate, and You consent to the Company obtaining any injunctive or equitable relief that they deem necessary or appropriate in such circumstances. These remedies are in addition to any other remedies that the Company may have at law or in equity. If the Company takes any legal action against You as a result of Your violation of these Terms, they will be entitled to recover from You, and You agree to pay, all reasonable attorneys’ fees and costs of such action, in addition to any other relief that may be granted.",
        },
      ],
    },
    {
      title: "Suspension and Termination",
      content: [
        {
          bulletPoints: [
            `The Terms will continue to apply until terminated by either You or the Company as set forth below. If You object to the Terms or are dissatisfied with the Platform, Your only recourse is to (i) close Your Account on the Platform; and/or (ii) stop accessing the Platform.`,
            `The Company may delist You or block Your future access to the Platform or suspend or terminate Your Account if it believes, in its sole and absolute discretion that You have infringed, breached, violated, abused, or unethically manipulated or exploited any term of these Terms or anyway otherwise acted unethically. Notwithstanding anything in this clause, these Terms will survive indefinitely unless and until the Company chooses to terminate them.`,
            `If You or the Company terminate Your use of the Platform, the Company may delete any Content or other materials relating to Your and the Company shall have no liability to You or any third party for doing so. However, Your transactions details may be preserved by the Company for purposes of tax or regulatory compliance.`,
            `You shall be liable to pay any fees or charges as may be applicable in respect of the Services until the date of termination by either party whatsoever.`,
            `The Company shall have the right to cease/terminate the relationship by giving You a prior twenty-four (24) hours’ written notice.`,
            ``,
          ],
        },
      ],
    },
    {
      title: "Other Provisions",
      content: [
        {
          points: [
            {
              underlineHeading: "Force Majeure",
              subPoint: `Under no circumstances will the Company be liable for any delay or failure in performance due in whole or in part to any acts of God (such as earthquakes, storms, floods, etc.), unavoidable accidents, laws, rules, regulations or orders of government authorities, acts of war (declared or not), terrorism, hostilities, blockades, civil disturbances, embargoes, strikes, any natural disasters such as any epidemic or pandemic, or any other event or cause beyond the reasonable control of any Company Party.`,
            },
            {
              underlineHeading: "Choice of Law and Jurisdiction",
              subPoint:
                "These Terms will be governed by and construed in accordance with the laws of India, without giving effect to any conflict of laws rules or provisions. Any disputes arising in relation hereto between You and any Company shall be subject to the exclusive jurisdiction of courts at Bangalore, India.",
            },
            {
              underlineHeading: "Severability",
              subPoint:
                " If any provision of these Terms is found to be invalid or unenforceable, that provision will be deemed appropriately modified to give effect to the intent of the provision or, if modification is not possible, will be severed from these Terms and will not affect the enforceability of any other provision.",
            },
            {
              underlineHeading: "Waiver and Severability",
              subPoint:
                "The failure by the Company to enforce any right or provision of these Terms will not prevent Company from enforcing such right or provision in the future and will not be deemed to modify these Terms. In the event that any provision of these Terms is held to be invalid or unenforceable, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect.",
            },
            {
              underlineHeading: "Assignment",
              subPoint:
                "The Company may, at any time, assign its rights and obligations under these Terms, to any third party.",
            },
            {
              underlineHeading: "Entire Agreement",
              subPoint:
                "These Terms and the Platform Policies are the entire and exclusive agreement between the Company and You regarding the Servicess, and these Terms supersede and replace any prior agreements between the Company and You regarding the Services.",
            },
            {
              underlineHeading: "Miscellaneous",
              subPoint:
                "The term “including” in these Terms will be interpreted broadly and will mean “including, without limitation.” Titles are for convenience only and will not be considered when interpreting these Terms.",
            },
          ],
        },
      ],
    },
    {
      title: "Changes to these Terms",
      content: [
        {
          paragraph:
            "The Company may revise or modify or amend these Terms at any time. If We do, We will post the revised Terms on the Platform and update the “Last Updated” date at the top of these Terms. It shall be Your responsibility to check these Terms periodically for changes. Your acceptance of the amended Terms shall signify Your consent to such changes and agreement to be legally bound by the same.",
        },
      ],
    },
    {
      title: "Grievance Redressal",
      paragraph: [
        "Any complaints arising from the access or usage of the Platform may be addressed to the following grievance officer:",
        grivanceSecondText(),
        `Contact information: 9910969603  or send message via Gmail on Hr@vetic.in`,
      ],
    },
    {
      title: "Communications",
      paragraph: [
        "You hereby expressly agree to receive communications by way of SMS and/or e-mails from the Company relating to the Services provided through the Platform. You can unsubscribe/ opt-out from receiving communications from the Company SMS and e-mail anytime by visiting the Platform. In which case, the Company will only send You communications solely required for the purposes of the Services provided through the Platform.",
      ],
    },
  ];

  const underlineText = (underlineHeading, data) => {
    return (
      <>
        {
          <li>
            <span style={{ display: "flex", marginBottom:'30px'}}>
              <span>
                <span style={{ textDecoration: "underline" }}>
                  {" "}
                  {underlineHeading}
                </span>
                {": "} <span style={{ textDecoration: "none", }}>{data}</span>
              </span>
            </span>
          </li>
        }
      </>
    );
  };

  const OwnershipSection = () => {
    return (
      <ul>
        <InfoList>
          You acknowledge and agree that the Company or its licensors own all
          right, title, and interest in and to: (i) the Platform and the “look
          and feel” of the Platform, including all software, ideas, processes,
          data, text, media, and other content available on the Platform
          (individually, and collectively, <strong>“Content”</strong>); and (ii)
          the Company’s trademarks, logos, and brand elements{" "}
          <strong>(“Marks”)</strong>. You shall not duplicate, copy, or reuse
          any portion of the Content, Marks, HTML/CSS, JavaScript, visual design
          elements, or concepts without the Company’s prior express written
          consent. The Company and such relevant third party reserve all rights
          not expressly granted in these Terms.
        </InfoList>
        <InfoList>
          You shall not make any disparaging or derogatory remarks, comments, or
          statements, whether verbal or written, against the Company. You
          acknowledge and agree that any feedback, comments, or suggestions You
          may provide regarding the Platform or the Services are entirely
          voluntary, and the Company will be free to use such feedback,
          comments, or suggestions as it sees fit and without any obligation to
          You.
        </InfoList>
      </ul>
    );
  };

  const additionalPoints = (data) => {
    return (
      data.title === "Eligibility and Access" ||
      data.title === "Access and Use of Service"
    );
  };

  return (
    <Container>
      <View>
        <Title>Terms of service</Title>
        <ParaGraph>{firstPara()}</ParaGraph>
        <ParaGraph>{secondPara()}</ParaGraph>
        <ParaGraph>{thirdPara()}</ParaGraph>
        {termsOfService.map((data, index) => (
          <div key={index}>
            <ol style={{marginTop:(data.title === "Fees and Payment" || data.title === "Privacy") && "40px"}}>
              <InfoList >
                <strong >{data.title}</strong>
              </InfoList>
            </ol>
            {additionalPoints(data) &&
              data.content &&
              data.content.length === 1 ? (
              <ParaGraph>{data.content[0]}</ParaGraph>
            ) : (
              additionalPoints(data) && (
                <ul>
                  {data.content &&
                    data.content.map((a) => {
                      return <InfoList>{a}</InfoList>
                    })}
                </ul>
              )
            )}

            {
              (data.title === "Disclaimers and Limitations on Our Liability") && (
                <>
                  {
                    data.content[0].bulletPoints.map((item)=>(
                       <ul>
                        <li style={{marginBottom:'50px'}}>
                          <strong>{item}</strong>
                        </li>
                       </ul>
                    ))
                  }
                </>
              )
            }

            {(data.title === "Services" || data.title === "Acceptable Use") && (
              <>
                {data.content.map(({ heading, points, subPoints, point }) => {
                  return (
                    <>
                      {heading && (
                        // unOrdered list
                        <ul>
                          <InfoList underline="true" style={{marginBottom: heading === "upload, publish, transmit, update or share information" && "0px"}}>{heading}</InfoList>
                        </ul>
                      )}
                      {subPoints && (
                        // ordered list
                        <ol >
                          {subPoints.map((point) => {
                            return <li>{point}</li>;
                          })}
                        </ol>
                      )}
                      {points ?
                        (points.map((point) => {
                          return (
                            <ul className={classes.point}>
                              <li>{point}</li>
                              {/* <InfoList>{point}</InfoList> */}
                            </ul>
                          );
                        })) : (
                          <>
                            <div>
                              {
                                point && point.map((data, index) => (
                                  <ul>
                                    <InfoList>{data}</InfoList>
                                  </ul>
                                ))
                              }
                            </div>
                            {/* <p className={classes.bottomSpace}>&nbsp;</p> */}
                          </>
                        )}
                    </>
                  );
                })}
              </>
            )}
            {/* Fees and Payment section */}
            {data.title === "Fees and Payment" && (
              <>
                {data.content &&
                  data.content.map(({ heading, points, bulletPoints,point }) => {
                    return (
                      <>
                        {heading && (
                          <ul>
                            <InfoList underline="true" marginTop="30px">{heading}</InfoList>
                          </ul>
                        )}
                        {point && (
                          <ul>
                            {point.map(({ underlineHeading, subPoint }) => {
                              return (
                                <>
                                  {underlineHeading !== "Payment Questions" &&
                                    underlineText(underlineHeading, subPoint)}
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {bulletPoints &&
                          bulletPoints.map((bulletPoint) => {
                            return (
                              <ul>
                                <InfoList>{bulletPoint}</InfoList>
                              </ul>
                            );
                          })}
                          {/* -------------------------- */}
                        {points && (
                          <ul>
                            {points.map(({ underlineHeading, subPoint }) => {
                              return (
                                <>
                                  {underlineHeading === "Payment Questions" &&
                                    underlineText(underlineHeading, subPoint)}
                                </>
                              );
                            })}
                          </ul>
                        )}
                        {/* --------------------- */}
                      </>
                    );
                  })}
              </>
            )}
            {data.title === "Ownership" && OwnershipSection()}
            {/* ------------------------------------------------------------------------------------------------------- */}
            {data.title === "Copyright and Intellectual Property Policy" && (
              <>
                {data.content &&
                  data.content.map(({ heading, points, bulletPoints }) => {
                    return (
                      <>
                        {heading && (
                          <ul>
                            <InfoList underline="true">{heading}</InfoList>
                          </ul>
                        )}
                        {points && (
                          <ul>
                            {points.map(({ underlineHeading, subPoint }) => {
                              return (
                                <>{underlineText(underlineHeading, subPoint)}</>
                              );
                            })}
                          </ul>
                        )}
                        {bulletPoints &&
                          bulletPoints.map((bulletPoint) => {
                            if (
                              bulletPoint ===
                              "If You do not follow these requirements, Your notice may not be valid."
                            ) {
                              return <ParaGraph style={{marginTop:'40px'}}>{bulletPoint}</ParaGraph>;
                            }
                            return (
                              <ul style={{margin:'0px'}}>
                                <li >{bulletPoint}</li>
                              </ul>
                            );
                          })}
                      </>
                    );
                  })}
              </>
            )}
            {data.title === "Privacy" && (
              <>{data.paragraph && <ParaGraph>{data.paragraph}</ParaGraph>}</>
            )}
            {(data.title === "License to Use the Service and Platform" ||
              data.title === "Third Party Content and Interactions" ||
              data.title === "Suspension and Termination") && (
                <>
                  {data.content &&
                    data.content.map(({ heading, bulletPoints }) => {
                      return (
                        <>
                          {heading && (
                            <ul>
                              <InfoList underline="true">{heading}</InfoList>
                            </ul>
                          )}
                          {bulletPoints &&
                            bulletPoints.map((bulletPoint) => {
                              return (
                                <ul>
                                  <InfoList>{bulletPoint}</InfoList>
                                </ul>
                              );
                            })}
                        </>
                      );
                    })}
                </>
              )}
            {(data.title === "Links" ||
              data.title === "Changes to the Platform" ||
              data.title === "Termination and Reservation of Rights" ||
              data.title === "Violation of the Terms" ||
              data.title === "Changes to these Terms") && (
                <>
                  {data.content &&
                    data.content.map(({ heading, paragraph }) => {
                      return (
                        <>
                          {heading && (
                            <ul>
                              <InfoList underline="true">{heading}</InfoList>
                            </ul>
                          )}
                          <ParaGraph>{paragraph}</ParaGraph>
                        </>
                      );
                    })}
                </>
              )}{" "}
            {data.title === "Other Provisions" && (
              <>
                {data.content &&
                  data.content.map(({ heading, points, bulletPoints }) => {
                    return (
                      <>
                        {heading && (
                          <ul>
                            <InfoList underline="true">{heading}</InfoList>
                          </ul>
                        )}
                        {points && (
                          <ul>
                            {points.map(({ underlineHeading, subPoint }) => {
                              return (
                                <>{underlineText(underlineHeading, subPoint)}</>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    );
                  })}
              </>
            )}
            {(data.title === "Grievance Redressal" ||
              data.title === "Communications") && (
                <>
                  {data.paragraph &&
                    data.paragraph.map((para, index) => {
                      return <ParaGraph key={index}>{para}</ParaGraph>;
                    })}
                </>
              )}
          </div>
        ))}
      </View>
    </Container>
  );
}

export default TermsAndCondition;
