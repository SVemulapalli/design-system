import React from 'react';
import PropTypes from 'prop-types';
import WysiwygNav from './WysiwygNav';
import WysiwygFooter from './WysiwygFooter';
import Editor from './Editor';
import { TextButton, Box } from "@strapi/parts";


const Wysiwyg = ({ label, placeholder, value, onChange }) => {

    return (
        <>
            <TextButton>{label}</TextButton>
            <Box paddingTop={1}>
                <WysiwygNav placeholder={placeholder} />
                <Editor value={value || ''} onChange={modifiedData => onChange(modifiedData)}/>
                <WysiwygFooter />
            </Box>
        </>
    )
};

Wysiwyg.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Wysiwyg;