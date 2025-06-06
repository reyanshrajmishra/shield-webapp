// src/pages/Terms.jsx
import React from 'react';

const Terms = () => {
  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px",
      lineHeight: "1.6",
      background: "#f5f5f5",
      color: "#333"
    }}>
      <h1>Terms and Conditions</h1>
      {/* Removed Effective Date if you want */}
      <p><strong>Effective Date:</strong> May 30, 2025</p>

      <h2>1. Introduction</h2>
      <p>SHIELD is a student-led initiative by students of St. Mary’s Inter College, Etawah. The goal of this project is to help resolve issues faced by students in a non-violent, discreet, and responsible manner. SHIELD is not a registered business, legal agency, or private security firm. We operate entirely for educational and school welfare purposes.</p>

      <h2>2. Voluntary Participation</h2>
      <p>By choosing to submit a case, request assistance, or communicate with SHIELD, you agree that your participation is voluntary and at your own discretion. You are not obligated to accept SHIELD’s recommendations or actions.</p>

      <h2>3. No Legal Liability</h2>
      <p>SHIELD and its members are not legally liable for any outcomes or consequences of the advice or support provided. We do not claim to offer professional legal, psychological, or emergency services. We are simply student volunteers aiming to help within our capacity.</p>

      <h2>4. Confidentiality and Use of Information</h2>
      <p>All information shared with SHIELD will be handled respectfully and kept confidential within the team. We will not disclose names, case details, or private conversations without your consent, unless the matter involves danger to someone's safety, in which case it may be shared with a trusted adult or authority figure.</p>
      <p><strong>Disclaimer:</strong> SHIELD is not responsible for any misuse, unauthorized access, or disclosure of information by third parties or users. Users must exercise caution when sharing personal or sensitive information.</p>

      <h2>5. User Responsibilities</h2>
      <ul>
        <li>Provide accurate and truthful information when submitting cases or requests.</li>
        <li>Respect the privacy and confidentiality of other users and SHIELD members.</li>
        <li>Refrain from submitting false reports, prank requests, or malicious content.</li>
        <li>Use SHIELD's services solely for appropriate, lawful, and ethical purposes.</li>
        <li>Understand that SHIELD does not guarantee resolution or specific outcomes.</li>
      </ul>

      <h2>6. Respectful Behavior</h2>
      <p>We expect all users to treat SHIELD members with respect. We do not tolerate harassment, threats, or misuse of the platform. Violations may result in blacklisting or restricted access.</p>

      <h2>7. Serious Cases and Escalation</h2>
      <p>In cases of serious or sensitive issues such as bullying, threats, violence, or abuse, SHIELD may escalate the matter to school authorities or recommend contacting appropriate professional or emergency services. SHIELD does not substitute official legal or emergency channels.</p>

      <h2>8. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, SHIELD and its members disclaim all warranties, expressed or implied, including but not limited to accuracy, reliability, and availability of the services. SHIELD will not be liable for any damages arising from the use or inability to use the services.</p>

      <h2>9. Intellectual Property</h2>
      <p>All content, logos, and materials on the SHIELD platform are the property of SHIELD and may not be copied, distributed, or used without permission.</p>

      <h2>10. Termination and Suspension</h2>
      <p>SHIELD reserves the right to suspend or terminate access to the platform and services for any user who violates these Terms or engages in conduct harmful to the organization or its members.</p>

      <h2>11. Changes to These Terms</h2>
      <p>As SHIELD evolves, these Terms and Conditions may be updated. It is your responsibility to check this page for updates. Major changes will be announced through SHIELD communication channels.</p>

      <h2>12. Governing Law</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws applicable to the jurisdiction of St. Mary’s Inter College, Etawah.</p>

      <h2>13. Contact</h2>
      <p>If you have questions or concerns about these terms, you may contact us through our official communication channels or email us at <strong>queriesshield@gmail.com</strong>.</p>

      <footer style={{
        marginTop: "40px",
        fontSize: "0.9em",
        color: "#777",
        borderTop: "1px solid #ccc",
        paddingTop: "20px"
      }}>
        &copy; 2025 SHIELD (Student Project) — All rights reserved.<br />
        Website created and maintained by students of St. Mary's Inter College, Etawah.
      </footer>
    </div>
  );
};

export default Terms;
