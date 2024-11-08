import styled from 'styled-components';

const HeroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    @media (max-width: 768px) {
        height: 40vh;
        font-size: 0.8em;
    }
`;