import React from "react";

const About = () =>{
    return(
    <div>
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Energized by complex assignments requiring communication with engineers, finance, creatives and business to bring clarity, produce results, and make history.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>1989-2000</h4>
                                <h4 className="subheading">Vault Capital is born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Co-founder and Managing Partner of Vault Capital.  Responsible for Vault Capital’s early-stage investments in Glowforge, which sold $27M in product within its first year, Clover, acquired by Starbucks, HouseValues, which went public, Singingfish, acquired by AOL, Terabeam which received $450M from Lucent, and then was acquired by YDI wireless, and Imperium Renewables, acquired by Renewable Energy Group (REGI). </p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">National Science Foundation Strategic!</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Ten-year board chair of the National Science Foundation's Science & Technology Center for Materials and Devices (STC-MDITR) resulting in 1741 Scientific articles, 1839 Presentations, 372 patents, and 15 start-up companies.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 className="subheading">Bioethics Project and The Artist Toolbox</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Ms. Franklin was a founding board member of The Bioethics Project which presented to the United Nations.  Ms. Franklin writes and lectures about technology, science, and art and has been published in Inside the Minds - Technology Venture Capital Deals. Consults with Fortune 500, produces salons by request, scientific lectures, and industry discussions to connect innovative thinkers and doers committed to solving the complex challenges of our time.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 className="subheading">Bioethics Project</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Ms. Franklin was a founding board member of The Bioethics Project which presented to the United Nations.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </div>
    )
}
export default About;