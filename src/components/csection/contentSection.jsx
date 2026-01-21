import { Csection } from "../../styles/componentStyles/csectionComponentStyle/csectionStyle";
const ContentSection = ({ children, id,className}) => {
    return (
        <Csection id={id} className={className}>
            {children}
        </Csection>
    );
};

export default ContentSection;