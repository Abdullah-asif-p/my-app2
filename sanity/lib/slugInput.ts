import React, { Component } from "react";
import PropTypes from "prop-types";
import slugify from "slugify";

interface Document {
  title: string;
}

interface Props {
  document: Document;
  onChange: (slug: string) => void;
}

class CustomInputSlug extends Component<Props> {
  static propTypes: { document: any; onChange: any };
  componentDidMount() {
    const { document } = this.props;
    const slug = this.generateSlug(document);
    this.props.onChange(slug);
  }

  generateSlug(document: Document): string {
    const { title } = document;
    const slug = slugify(title);
    return slug.toLowerCase();
  }

  render() {
    return null;
  }
}

CustomInputSlug.propTypes = {
  document: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomInputSlug;
