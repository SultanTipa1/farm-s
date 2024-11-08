import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    text-align: center;
    padding: 1em 0;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
    margin-top: 0.5em;

    a {
        color: white;
        font-size: 1.5em;
    }
`;

const Footer = () => (
    <FooterWrapper>
        <p>&copy; {new Date().getFullYear()} Farmart. All rights reserved.</p>
        <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
        </SocialLinks>
    </FooterWrapper>
);

export default Footer;