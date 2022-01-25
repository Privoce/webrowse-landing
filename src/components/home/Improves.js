import React from 'react'
import styled from 'styled-components';
const StyledSection = styled.section`
    margin:180px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    z-index: 999;
    .title{
        text-align: center;
        //width: 500px;
        color: #fff;
        /* font-weight: bold; */
        font-size: 36px;
        line-height: 45px;
    }
    .box{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:62px;
        @media screen and (max-width: 414px) {
            grid-template-columns: 1fr;
        }
        .tip{
            width: 364px;
            display: flex;
            flex-direction: column;
            gap: 32px;
            dt{
                font-weight: 800;
                font-size: 24px;
                line-height: 29px;
                color: #1FE1F9;
            }
            dd{
                color:rgba(255,255,255,.8);
                font-weight: 200;
                font-size: 18px;
                line-height: 22px;
            }
        }
    }
`;
const Tips = [
    {
        header: 'Customer Support',
        content: 'Resolve customer issues quickly, collaboratively, and in real-time. Replace IM or email with hands-on help.'
    },
    {
        header: 'Sales Demos',
        content: 'Instead of screen sharing your demo, create a dynamic walkthrough and create an experience that actively engages your clients.'
    },
    {
        header: 'Onboarding',
        content: 'Turn passive training sessions into active ones by seamlessly granting control to your audience at any time.'
    },
    {
        header: 'Training & Learning Courses',
        content: 'Share learning resources in real time with the option to allow students and trainees to read at their own pace. Easily save windows to revisit learning materials at any time. '
    },
    {
        header: 'Remote Work',
        content: 'Streamline your workflow by collaboratively setting goals, leading meetings, editing documents, and tracking progress.'
    },
    {
        header: 'Entertainment',
        content: 'Watch a movie, shop together, or hang out with friends in the browser with just one click.'
    },
]
export default function Improves() {
    return (
        <StyledSection>
            <h3 className="title">Improve your workflow with cobrowsing for any use case</h3>
            <div className="box">
                {Tips.map(t => {
                    const { header, content } = t;
                    return <dl className="tip" key={header}>
                        <dt>{header}</dt>
                        <dd>{content}</dd>
                    </dl>
                })}
            </div>
        </StyledSection>
    )
}
