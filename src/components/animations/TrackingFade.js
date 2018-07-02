import React, { Component } from "react";
import { TrackDocument, TrackedDiv } from "react-track";
import { topTop, calculateScrollY } from "react-track/tracking-formulas";
import { tween } from "react-imation";

export default class TrackingFade extends Component {
  render() {
    return (
      <TrackDocument formulas={[topTop, calculateScrollY]}>
        {(topTop, scrollY) => (
          <TrackedDiv formulas={[topTop]}>
            {posTopTop => (
              <div
                className="flex-content-center"
                style={tween(scrollY, [
                  [posTopTop - 0, { opacity: 1 }],
                  [posTopTop + 400, { opacity: 0 }]
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
