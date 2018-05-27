import React, { Component, PropTypes } from 'react'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`

  @page {
      margin: 0;
      size: A4;
  }

  @font-face {
      font-family: 'DIN Regular';
      src: url('/assets/fonts/din-regular-webfont.woff');
  }

  @font-face {
      font-family: 'DIN Light';
      src: url('/assets/fonts/din-light-webfont.woff');
  }

  html {
      width: 100%;
  }

  html, body {
      padding: 0;
      margin: 0;
  }

  body {
      width: 210mm;
      margin-left: auto;
      margin-right: auto;
      font-family: 'DIN Light';
  }

`

const Page = styled.div`
  --margin-top-bottom: 15mm;
  --margin-left-right: 15mm;
  margin: 0;
  padding-top: var(--margin-top-bottom);
  padding-bottom: var(--margin-top-bottom);
  padding-left: var(--margin-left-right);
  padding-right: var(--margin-left-right);
  height: calc(297mm - (2 * var(--margin-top-bottom)));
  width: calc(210mm - (2 * var(--margin-left-right)));
  page-break-after: always;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2mm;
  border-bottom: 0.1mm solid #999;
`

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2mm;
  justify-content: space-between;
`

const Name = styled.div`
  font-size: 10mm;
  padding-bottom: 2mm;
  margin-left: -3px;
`

const Contact = styled.div`
  font-size: 4mm;
  text-align: right;
  line-height: 6mm;
`

const AtSymbol = styled.span`
  font-family: 'Sans Serif';
  font-size: 3.5mm;
  margin: 0 0.2mm;
  color: #555;
`

const Title = styled.div`
  display: block;
  font-size: 4mm;
  line-height: 6mm;
`

const Period = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5mm;
`

const Company = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 9mm;
`

const Logo = styled.svg`
  height: 9mm;
`

const Location = styled.div`
  height: 7mm;
  width: 100%;
  display: flex;
  align-items: center;
`

const LocationName = styled.span`
  font-size: 3.5mm;
`

const Role = styled.div`
  align-self: flex-start;
  margin: 1mm 0;
`

const DateRange = styled.span`
  margin-left: 2mm;
  font-size: 3.5mm;
  color: #444;
`

const Responsibilities = styled.ul`
  padding: 0 0 0 2mm;
  margin: 1mm 0 0 0;
  list-style: none;
`

const Responsibility = styled.li`
  margin: 1mm 0 1mm 2mm;
  font-size: 3.5mm;
  color: #333;
  &:last-child {
    margin-bottom: 3mm;
  }
  &:before {
    content: "·";
    font-size: 7mm;
    vertical-align: bottom;
    line-height: 4mm;
    margin-right: 5px;
  }
`

export default class Resume extends Component {

  render () {
    return (
      <div>
        <Page>
          <Header>
              <Name>Nuno Pinge</Name>
          </Header>
          <SubHeader>
            <Title>Engineering Manager & Entrepreneur</Title>
            <Contact>+1 347 PIN GE11<br/>nuno<AtSymbol>@</AtSymbol>pinge.org</Contact>
          </SubHeader>

          <Period>
            <Company>
              <Logo style={ { width: '40mm' } }><use xlinkHref="/assets/svg/deployeth.svg#deployeth"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Barcelona</LocationName>
              </Location>

            </Company>
            <Role>Co-Founder and Chief Product Officer<DateRange>| &nbsp;Jan '16 - Nov '17</DateRange></Role>
            <Responsibilities>
              <Responsibility>Responsible for branding and product development, being actively engaged in business development</Responsibility>
              <Responsibility>Architected and implemented a highly available, offline capable, IoT platform for energy management</Responsibility>
              <Responsibility>tech stack: ZigBee, Python, Ruby, JavaScript, PostgreSQL, Redis, AWS</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '44mm' } }><use xlinkHref="/assets/svg/startupbootcamp.svg#startupbootcamp"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Barcelona</LocationName>
              </Location>
            </Company>
            <Role>Entrepreneur<DateRange>| &nbsp;Nov '16 - May '17</DateRange></Role>
            <Responsibilities>
              <Responsibility>Business and product development, marketing, sales, and public speaking training</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '31mm' } }><use xlinkHref="/assets/svg/jwplayer.svg#jwplayer"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>New York</LocationName>
              </Location>
            </Company>
            <Role>Software Engineering Manager, Media Engineering<DateRange>| &nbsp;Aug '16 - Feb '17</DateRange></Role>
            <Responsibilities>
              <Responsibility>Architected and implemented the live streaming product JW Live within a timeline of 6 months</Responsibility>
              <Responsibility>Created the Media Intelligence engineering team, mentoring interns and promoting engineers internally</Responsibility>
              <Responsibility>Designed and implemented smart thumbnail/scene extraction for video intelligence using machine learning</Responsibility>
              <Responsibility>Designed testing frameworks for automated video ingestion and output quality assessment using SSIM</Responsibility>
              <Responsibility>Speaker at Demuxed 2016: DASHing Into the Wild with VP9</Responsibility>
            </Responsibilities>
            <Role>Software Engineering Manager, Media Services<DateRange>| &nbsp;Aug '15 - Jul '16</DateRange></Role>
            <Responsibilities>
              <Responsibility>Responsible for media management and storage at scale, and content delivery across the globe (PBs per month)</Responsibility>
              <Responsibility>Created the Media Platform API engineering team, recruiting both engineers and manager</Responsibility>
              <Responsibility>Increased service availability from 98% to 99.98%, by designing a distributed caching layer</Responsibility>
              <Responsibility>Architected and implemented video adaptive streaming delivery with MPEG-DASH and VP9 video encoding</Responsibility>
              <Responsibility>Speaker at JW Insights: VP9-DASH - Streaming Tomorrow’s Video Today</Responsibility>
              <Responsibility>tech stack: Python, Lua, NGINX, MySQL, PostgreSQL, Redis, AWS</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '36mm' } }><use xlinkHref="/assets/svg/compstak.svg#compstak"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>New York</LocationName>
              </Location>
            </Company>
            <Role>Senior Software Engineer and CodeSmith<DateRange>| &nbsp;Dec '13 - Jul '15</DateRange></Role>
            <Responsibilities>
              <Responsibility>Designed APIs and implemented a micro service oriented architecture backend</Responsibility>
              <Responsibility>Lectured programming classes for the Data Team, mentoring engineers when developing internal tools</Responsibility>
              <Responsibility>Designed map based user interfaces with features like filtering and aggregating real estate market data</Responsibility>
              <Responsibility>tech stack: JavaScript, Scala, Python, NGINX, MySQL, ElasticSearch, AWS</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '37mm' } }><use xlinkHref="/assets/svg/livestream.svg#livestream"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>New York</LocationName>
              </Location>
            </Company>
            <Role>Software Engineering Manager, Web Platform<DateRange>| &nbsp;Sep '12 - Nov '13</DateRange></Role>
            <Responsibilities>
              <Responsibility>Improved frontend scalability to handle spikes of 1M viewers in 5 minutes, by designing a full page caching layer</Responsibility>
              <Responsibility>Built a testing framework for automated, cross-browser/platform tests for live and on-demand video playback</Responsibility>
              <Responsibility>Frontend integration with subscription billing, analytics, customer support and social networks</Responsibility>
              <Responsibility>tech stack: JavaScript, Ruby, Selenium, WebDriver, Varnish, NGINX, MySQL, Redis, AWS</Responsibility>
            </Responsibilities>
          </Period>

        </Page>

        <Page>

          <Header>
              <Name style={ { opacity: '0.15' } }>Nuno Pinge</Name>
          </Header>
          <SubHeader style={ { height: '15mm' } }>
              <Title style={ { opacity: '0.25' } }>Engineering Manager & Entrepreneur</Title>
          </SubHeader>

          <Period>
            <Company>
              <Logo style={ { width: '23mm' } }><use xlinkHref="/assets/svg/lmit.svg#lmit"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>Head of Software Engineering and Architecture<DateRange>| &nbsp;Jan '12 - Aug '12</DateRange></Role>
            <Responsibilities>
              <Responsibility>Technical leadership for the WiseMetering energy management platform</Responsibility>
            </Responsibilities>
            <Role>Software Engineer<DateRange>| &nbsp;Dec '08 - Dec '11</DateRange></Role>
            <Responsibilities>
              <Responsibility>Designed and implemented a multi-tenant, SaaS energy management platform</Responsibility>
              <Responsibility>IoT architecture and deployment with 3G integration for remote appliance monitoring</Responsibility>
              <Responsibility>Built a helpdesk and a document management system integrated with Salesforce</Responsibility>
            </Responsibilities>
            <Role>DevOps<DateRange>| &nbsp;Jan '10 - Oct '10</DateRange></Role>
            <Responsibilities>
              <Responsibility>Built a highly available in-house datacenter with storage redundancy for analytics at scale</Responsibility>
              <Responsibility>tech stack: JavaScript, Ruby, C#, C, NGINX, Apache, MySQL, RabbitMQ, Redis, ZFS, Xen, XenServer</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '24mm' } }><use xlinkHref="/assets/svg/dripcil.svg#dripcil"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>Co-Founder and Chief Technology Officer<DateRange>| &nbsp;Aug '11 - present</DateRange></Role>
            <Responsibilities>
              <Responsibility>Created DamnSimplePOS, a web based point of sale authorized by the Portuguese Tax Authority</Responsibility>
              <Responsibility>tech stack: JavaScript, Python, Google Bigtable, Google App Engine</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '38mm' } }><use xlinkHref="/assets/svg/freelancer.svg#freelancer"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>Web Developer, Systems Administrator<DateRange>| &nbsp;Jan '03 - Nov '08</DateRange></Role>
            <Responsibilities>
              <Responsibility>Designed, implemented and maintained dozens of customized web applications, from e-commerce to intranets</Responsibility>
              <Responsibility>tech stack: JavaScript, ActionScript, PHP, Java, Apache, Tomcat, MySQL</Responsibility>
            </Responsibilities>
          </Period>

          <Period>
            <Company>
              <Logo style={ { width: '25mm' } }><use xlinkHref="/assets/svg/tecnico.svg#tecnico"></use></Logo>
              <Location>
                <svg style={ { height: '6mm', width: '6mm' } }>
                  <use xlinkHref="/assets/svg/location.svg#location"></use>
                </svg>
                <LocationName>Lisbon</LocationName>
              </Location>
            </Company>
            <Role>MSc Computer Science and Distributed Systems<DateRange>| &nbsp;Sep '07 - dropout</DateRange></Role>
            <Role>BSc Computer and Software Engineering<DateRange>| &nbsp;Sep '99 - Jul '09</DateRange></Role>
          </Period>

          <br />

          Fluent in english, portuguese and spanish, with elementary proficiency in french.

          <br />
          <br />
          <br />

          <div style={ { 'alignSelf': 'flex-end' } }>
            The source code for this resume is available at <a href="http://github.com/pinge/resume">github.com/pinge/resume</a>
          </div>

        </Page>

      </div>
    )
  }

}
