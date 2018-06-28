import React, { Component } from "react";
import { TrackDocument, TrackedDiv } from "react-track";
import { topTop, calculateScrollY } from "react-track/tracking-formulas";
import { tween } from "react-imation";

export default class TrackingFadeIn extends Component {
  render() {
    return (
      <TrackDocument formulas={[topTop, calculateScrollY]}>
        {(topTop, scrollY) => (
          <TrackedDiv formulas={[topTop]}>
            {posTopTop => (
              <div
                className="flex-content-center Tracking-fade-in"
                style={tween(scrollY, [
                  [0, { opacity: 0, marginBottom: 0 }],
                  [posTopTop - 600, { opacity: 0, marginBottom: 0 }],
                  [posTopTop - 200, { opacity: 1, marginBottom: 100 }]
                ])}
              >
                {this.props.children}
              </div>
            )}
          </TrackedDiv>
        )}
      </TrackDocument>
    );
  }
}
