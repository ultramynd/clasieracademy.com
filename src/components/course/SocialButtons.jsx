import Icons from "components/common/Icons";
import React from "react";
import { Button } from "components/ui/button";

class SocialButtons extends React.Component {
  render() {
    let styles = {
      borderRadius: "50%",
      padding: 7,
      width: 40,
      height: 40,
      margin: 3,
    };
    return (
      <>
        <Button
          asChild
          variant="hero"
          style={styles}
        >
          <a href={"mailto:" + this.props.data.email} target="_blank">
            <Icons icon="envelope" />
          </a>
        </Button>

        {this.props.data.whatsapp_number ? (
          <Button
            asChild
            variant="hero"
            style={styles}
          >
            <a
              href={
                "https://api.whatsapp.com/send?phone=" +
                this.props.data.whatsapp_code_area +
                this.props.data.whatsapp_number
              }
              target="_blank"
            >
              <Icons icon="whatsapp" />
            </a>
          </Button>
        ) : null}
        {this.props.data.link_facebook ? (
          <Button
            asChild
            variant="hero"
            style={styles}
          >
            <a href={this.props.data.link_facebook}>
              <Icons icon="facebook" />
            </a>
          </Button>
        ) : null}
        {this.props.data.link_twitter ? (
          <Button
            asChild
            variant="hero"
            style={styles}
          >
            <a href={this.props.data.link_twitter} target="_blank">
              <Icons icon="twitter" />
            </a>
          </Button>
        ) : null}
        {this.props.data.link_instagram ? (
          <Button
            asChild
            variant="hero"
            style={styles}
          >
            <a href={this.props.data.link_instagram} target="_blank">
              <Icons icon="instagram" />
            </a>
          </Button>
        ) : null}
      </>
    );
  }
}

export default SocialButtons;
