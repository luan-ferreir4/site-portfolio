import { Csection } from "../../styles/componentStyles/csectionComponentStyle/csectionStyle";
const ContentSection = ({ children, className}) => {
    return (
        <Csection className={className}>
            {children}
        </Csection>
    );
};

export default ContentSection;