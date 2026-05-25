/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';
import { LeadFormPopup } from './components/LeadFormPopup';
import { AnimatedSection } from './components/AnimatedSection';

const Supporters = React.lazy(() => import('./components/Stats').then(m => ({ default: m.Supporters })));
const QuoteStrip = React.lazy(() => import('./components/Stats').then(m => ({ default: m.QuoteStrip })));
const OutcomesStats = React.lazy(() => import('./components/Stats').then(m => ({ default: m.OutcomesStats })));
const MediaStrip = React.lazy(() => import('./components/Stats').then(m => ({ default: m.MediaStrip })));
const CampusLife = React.lazy(() => import('./components/Campus').then(m => ({ default: m.CampusLife })));
const Founders = React.lazy(() => import('./components/Campus').then(m => ({ default: m.Founders })));
const Incubator = React.lazy(() => import('./components/Campus').then(m => ({ default: m.Incubator })));
const CurriculumSection = React.lazy(() => import('./components/Curriculum').then(m => ({ default: m.CurriculumSection })));
const FacultySection = React.lazy(() => import('./components/Faculty').then(m => ({ default: m.FacultySection })));
const NumberedFeatures = React.lazy(() => import('./components/Curriculum').then(m => ({ default: m.NumberedFeatures })));
const IndustryProjects = React.lazy(() => import('./components/Curriculum').then(m => ({ default: m.IndustryProjects })));
const Bootcamps = React.lazy(() => import('./components/Curriculum').then(m => ({ default: m.Bootcamps })));
const Academics = React.lazy(() => import('./components/LightSections').then(m => ({ default: m.Academics })));
const GlobalImmersion = React.lazy(() => import('./components/LightSections').then(m => ({ default: m.GlobalImmersion })));
const Footer = React.lazy(() => import('./components/CareersAdmissions').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-[90px]">
        {/* 2. Hero Section & 3. Program Info Card */}
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        
        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          {/* 4. Supporters & Investors */}
          <AnimatedSection>
            <Supporters />
          </AnimatedSection>
          
          {/* 5. Quote Strip */}
          <AnimatedSection>
            <QuoteStrip />
          </AnimatedSection>
          
          {/* 6. Outcomes Stats Bar */}
          <AnimatedSection>
            <OutcomesStats />
          </AnimatedSection>
          
          {/* 7. Media Strip */}
          <AnimatedSection>
            <MediaStrip />
          </AnimatedSection>
          
          {/* 10. Program Details Panel */}
          <AnimatedSection>
            <CurriculumSection />
          </AnimatedSection>
          
          {/* Faculty Section */}
          <AnimatedSection>
            <FacultySection />
          </AnimatedSection>
          
          {/* 11. Numbered Features 1-6 */}
          <AnimatedSection>
            <NumberedFeatures />
          </AnimatedSection>
          
          {/* 9. Campus Life/Story Cards */}
          <AnimatedSection>
            <CampusLife />
          </AnimatedSection>
          
          {/* 12. Academics Section */}
          <AnimatedSection>
            <Academics />
          </AnimatedSection>
          
          {/* 13. Learn from Founders */}
          <AnimatedSection>
            <Founders />
          </AnimatedSection>
          
          {/* 14. Live Industry Projects */}
          <AnimatedSection>
            <IndustryProjects />
          </AnimatedSection>
          
          {/* 15. Industry Bootcamps */}
          <AnimatedSection>
            <Bootcamps />
          </AnimatedSection>
          
          {/* 16. Startup Readiness/Incubator */}
          <AnimatedSection>
            <Incubator />
          </AnimatedSection>
          
          {/* 17. Global Immersion */}
          <AnimatedSection>
            <GlobalImmersion />
          </AnimatedSection>
          
          {/* 18. Footer */}
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </Suspense>
        
        <BackToTop />
        <LeadFormPopup />
      </main>
    </>
  );
}
