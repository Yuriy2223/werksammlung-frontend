// import { ContactSection } from "./Contact.styled";

// export const Contact = () => {
//   return <ContactSection id="contact">Contact</ContactSection>;
// };
/**************************** */

// import { useState } from "react";
// import styled from "styled-components";
// import { Github, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

// // === Стилі ===
// const ContactSection = styled.section`
//   padding: 5rem 2rem;
//   background-color: #f8f9fa;
//   color: #495057;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-top: 2px solid #e9ecef;
// `;

// const TitleWrapper = styled.div`
//   margin-bottom: 4rem;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: #212529;
//   margin-bottom: 0.5rem;
// `;

// const Subtitle = styled.p`
//   font-size: 1.1rem;
//   color: #6c757d;
//   margin-bottom: 2rem;
// `;

// const ContactForm = styled.form`
//   background: #ffffff;
//   border-radius: 1.25rem;
//   padding: 3rem;
//   box-shadow: 0 12px 35px rgba(0, 188, 212, 0.1);
//   border: 1px solid #ddd;
//   max-width: 650px;
//   width: 100%;
//   display: grid;
//   gap: 2rem;
// `;

// const FormField = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
// `;

// const Label = styled.label`
//   font-size: 1.1rem;
//   color: #212529;
//   font-weight: 600;
// `;

// const Input = styled.input`
//   padding: 1.2rem;
//   font-size: 1.1rem;
//   border-radius: 0.75rem;
//   border: 2px solid #ced4da;
//   background-color: #f8f9fa;

//   &:focus {
//     border-color: #00bcd4;
//     background-color: #e9f7fb;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 1.2rem;
//   font-size: 1.1rem;
//   border-radius: 0.75rem;
//   border: 2px solid #ced4da;
//   background-color: #f8f9fa;
//   resize: vertical;
//   min-height: 150px;

//   &:focus {
//     border-color: #00bcd4;
//     background-color: #e9f7fb;
//   }
// `;

// const SubmitButton = styled.button`
//   background-color: #00bcd4;
//   color: white;
//   border: none;
//   padding: 1rem 2rem;
//   border-radius: 1rem;
//   cursor: pointer;
//   font-size: 1.1rem;
//   width: 100%;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #008c9e;
//   }
// `;

// const SocialLinks = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
// `;

// const SocialLink = styled.a`
//   font-size: 2.5rem;
//   color: #00bcd4;

//   &:hover {
//     color: #008c9e;
//   }
// `;

// const InfoSection = styled.div`
//   margin-top: 4rem;
//   display: flex;
//   justify-content: center;
//   gap: 3rem;
//   flex-wrap: wrap;
//   align-items: center;
// `;

// const InfoBox = styled.div`
//   text-align: left;
//   max-width: 320px;
//   padding: 2rem;
//   background-color: #ffffff;
//   border-radius: 1.5rem;
//   box-shadow: 0 12px 35px rgba(0, 188, 212, 0.1);
//   border: 1px solid #ddd;

//   h3 {
//     font-size: 1.5rem;
//     color: #212529;
//     margin-bottom: 1.2rem;
//     display: flex;
//     align-items: center;
//   }

//   p {
//     font-size: 1.1rem;
//     color: #6c757d;
//     margin-bottom: 0.5rem;
//   }

//   svg {
//     color: #00bcd4;
//     font-size: 1.5rem;
//     margin-right: 1rem;
//   }
// `;

// // === Основний компонент ===
// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Тут можна додати логіку для відправки форми
//     console.log(formData);
//   };

//   return (
//     <ContactSection id="contact">
//       <TitleWrapper>
//         <Title>Contact Me</Title>
//         <Subtitle>
//           {/* Feel free to get in touch for collaboration or inquiries. */}
//           Get in touch for collaborations, inquiries, or anything else. I'm
//           always open to new opportunities!
//         </Subtitle>
//       </TitleWrapper>

//       <ContactForm onSubmit={handleSubmit}>
//         <FormField>
//           <Label htmlFor="name">Your Name</Label>
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="John Doe"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="email">Your Email</Label>
//           <Input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="you@example.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="message">Your Message</Label>
//           <TextArea
//             id="message"
//             name="message"
//             placeholder="Write your message..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </FormField>
//         <SubmitButton type="submit">Send Message</SubmitButton>
//       </ContactForm>

//       <SocialLinks>
//         <SocialLink href="https://github.com" target="_blank">
//           <Github />
//         </SocialLink>
//         <SocialLink href="https://www.linkedin.com" target="_blank">
//           <Linkedin />
//         </SocialLink>
//         <SocialLink href="mailto:you@example.com" target="_blank">
//           <Mail />
//         </SocialLink>
//         <SocialLink href="tel:+123456789" target="_blank">
//           <Phone />
//         </SocialLink>
//         <SocialLink href="https://www.yourwebsite.com" target="_blank">
//           <Globe />
//         </SocialLink>
//       </SocialLinks>

//       <InfoSection>
//         <InfoBox>
//           <h3>
//             <MapPin /> Location
//           </h3>
//           <p>123 Main St, Kyiv, Ukraine</p>
//         </InfoBox>
//         <InfoBox>
//           <h3>
//             <Phone /> Call Me
//           </h3>
//           <p>+123 456 789</p>
//         </InfoBox>
//       </InfoSection>
//     </ContactSection>
//   );
// };
/*********************************************** */

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

// === Анімації ===
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const ContactSection = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// === Декор фону ===
const FloatingBlob = styled.div<{ top: string; left: string }>`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 188, 212, 0.4), transparent 70%);
  filter: blur(80px);
  animation: ${float} 6s ease-in-out infinite;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 0;
`;

const TitleWrapper = styled(motion.div)`
  margin-bottom: 3rem;
  text-align: center;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #212529;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #5c636a;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 15px 50px rgba(0, 188, 212, 0.15);
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.1rem;
  color: #212529;
`;

const Input = styled.input`
  padding: 1.2rem;
  border: 2px solid #ced4da;
  border-radius: 1rem;
  font-size: 1.1rem;
  background-color: #f1f3f5;
  transition: 0.3s;

  &:focus {
    border-color: #00bcd4;
    background-color: #e9f7fb;
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 188, 212, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1.2rem;
  border: 2px solid #ced4da;
  border-radius: 1rem;
  font-size: 1.1rem;
  background-color: #f1f3f5;
  min-height: 150px;
  resize: vertical;
  transition: 0.3s;

  &:focus {
    border-color: #00bcd4;
    background-color: #e9f7fb;
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 188, 212, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #00bcd4;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    background-color: #0098a5;
    transform: scale(1.02);
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: 600;
  text-align: center;
`;

const SocialLinks = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  z-index: 2;
`;

const SocialLink = styled.a`
  color: #00bcd4;
  font-size: 2.2rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2) rotate(5deg);
    color: #008b9b;
  }
`;

const InfoSection = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;
`;

const InfoBox = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid #dee2e6;
  box-shadow: 0 8px 30px rgba(0, 188, 212, 0.1);
  max-width: 300px;

  h3 {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    color: #212529;
  }

  svg {
    margin-right: 0.75rem;
    color: #00bcd4;
  }

  p {
    font-size: 1.1rem;
    color: #495057;
  }
`;

// === Компонент ===
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <ContactSection id="contact">
      <FloatingBlob top="10%" left="5%" />
      <FloatingBlob top="60%" left="80%" />

      <TitleWrapper
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Title>Contact Me</Title>
        <Subtitle>
          Drop a message for collaboration, freelancing or just to say hi! ✌️
        </Subtitle>
      </TitleWrapper>

      <ContactForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <FormField>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="message">Your Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Send Message</SubmitButton>
        {submitted && <SuccessMessage>✅ Message sent!</SuccessMessage>}
      </ContactForm>

      <SocialLinks
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <SocialLink href="https://github.com" target="_blank">
          <Github />
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank">
          <Linkedin />
        </SocialLink>
        <SocialLink href="mailto:you@example.com">
          <Mail />
        </SocialLink>
        <SocialLink href="tel:+123456789">
          <Phone />
        </SocialLink>
        <SocialLink href="https://yourwebsite.com">
          <Globe />
        </SocialLink>
      </SocialLinks>

      <InfoSection>
        <InfoBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3>
            <MapPin /> Location
          </h3>
          <p>123 Main St, Kyiv, Ukraine</p>
        </InfoBox>
        <InfoBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h3>
            <Phone /> Call Me
          </h3>
          <p>+123 456 789</p>
        </InfoBox>
      </InfoSection>
    </ContactSection>
  );
};
