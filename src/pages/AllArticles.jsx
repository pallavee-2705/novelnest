// AllArticles.js

import React from 'react';
import { useParams } from 'react-router-dom';

const AllArticles = () => {
  const { id } = useParams();

  const selectedArticle = {
    1: { title: 'The Magic of Early Reading: Nurturing Young Minds',
    content: `
        <p class="text-3xl font-semibold mb-4">Introduction</p>
        <p class="text-xl">
        Reading as a Magical Journey:
        <br/> 
        Embarking on the journey of reading is like stepping into a magical realm where imagination knows no bounds. The written word has the power to transport us to different worlds, introduce us to diverse characters, and ignite our creativity. In this section, we delve into the captivating experience of reading, particularly during the early stages of a child's life.
        <br/>
        <br/>
        Early Reading and Child Development:    <br/> 

        Early reading is more than just an enjoyable pastime; it is a pivotal force in shaping a child's development. The formative years are a critical period for cognitive, emotional, and social growth. We'll explore how engaging with books from a young age lays the foundation for crucial skills, including language acquisition and cognitive abilities.
        </p>

        <p class="text-3xl font-semibold mt-8 mb-4">Body</p>
        <p class="text-xl">
        Cognitive Development:
        <br/> 

        The impact of early reading on cognitive development is profound. As children engage with stories, their brains actively process information, fostering critical thinking and problem-solving skills. We'll examine how exposure to a variety of literature can enhance cognitive functions and contribute to academic success later in life.
        <br/>
        <br/>
        Language Skills:    <br/> 

        Language is a fundamental tool for communication and expression. Early exposure to a rich vocabulary through reading cultivates language skills, aiding in effective communication. We'll explore the role of literature in building a strong linguistic foundation and how it influences language proficiency in various aspects of life.
        <br/>
        <br/>
        Emotional Intelligence:    <br/> 

        Stories have the power to evoke a range of emotions. Understanding and empathizing with characters in books contribute to the development of emotional intelligence. This section will discuss how early reading nurtures empathy, compassion, and emotional resilience in children.
        </p>

        <p class="text-3xl font-semibold mt-8 mb-4">Claims</p>
        <p class="text-xl">
        Scientific Findings on Early Reading:    <br/> 

        In this segment, we'll delve into scientific research and findings supporting the benefits of early reading. Studies have shown a correlation between regular reading habits in childhood and improved academic performance. We'll present evidence-backed claims on the positive effects of early reading on various aspects of a child's development.
        <br/>
        <br/>
        Research Supporting the Benefits:    <br/> 

        Explore the body of research that highlights the advantages of early literacy. From neurological studies showcasing brain development to educational research linking reading to academic achievement, this section will provide a comprehensive overview of the scientific landscape supporting the claims made in the article.
        </p>

        <p class="text-3xl font-semibold mt-8 mb-4">Conclusion</p>
        <p class="text-xl">
        Beyond Delight: A Lifelong Impact:    <br/> 

        Concluding our exploration, we reflect on the lasting impact of early reading. It goes beyond being a delightful activity; it becomes a powerful tool for nurturing young minds. By instilling a love for books from an early age, we set the stage for a lifetime of curiosity, creativity, and academic success. The journey initiated in childhood paves the way for a future enriched by the wisdom found within the pages of countless stories.
        </p>
      `,
  },
    2: { title: 'Women in STEM: Nurturing the Next Generation of Innovators', 
    content: `
    <p class="text-3xl font-semibold mb-4">Introduction</p>
    <p class="text-xl">
    The Current Landscape of Women in STEM:
    <br/> 
    In recent years, there has been a growing awareness of the gender disparity within STEM fields. Despite advancements in education and workplace opportunities, women continue to be underrepresented in science, technology, engineering, and mathematics. The underrepresentation is not only a gender equality issue but also a missed opportunity for diverse perspectives and innovation in these critical fields.
    <br/> 
    <br/> 

    The Gender Gap in STEM Education:
    <br/> 
    The gender gap in STEM education begins early in a child's life. Social expectations, stereotypes, and the lack of exposure to STEM concepts contribute to the lower participation of girls in STEM subjects. Addressing these challenges is fundamental to breaking down barriers and encouraging young girls to explore and pursue their interests in STEM.    </p>

    <p class="text-3xl font-semibold mt-8 mb-4">Nurturing Interest in STEM from a Young Age
    </p>
    <p class="text-xl">
    Early Exposure to STEM: <br/>
    Initiatives that introduce STEM concepts to children at a young age play a crucial role in nurturing interest. Whether through interactive programs, educational toys, or engaging workshops, these initiatives aim to capture the curiosity of young minds and create a positive association with STEM.
    <br/><br/>
    Role Models and Mentorship:<br/>
    Highlighting successful women in STEM as role models is essential for inspiring the next generation. Mentorship programs connect aspiring young girls with experienced women in STEM, providing guidance, support, and real-world examples of successful STEM careers.    
    </p>

    <p class="text-3xl font-semibold mt-8 mb-4">Overcoming Challenges in STEM Education
    </p>
    <p class="text-xl">
    Breaking Stereotypes: <br/>
    The stereotype that STEM fields are primarily for boys persists in society. Breaking down these stereotypes requires concerted efforts in education, media representation, and cultural shifts to demonstrate that STEM is inclusive and welcoming to all.
    <br/>
    <br/>
    Educational Initiatives: <br />
    Numerous educational initiatives are actively working to close the gender gap in STEM education. These programs focus on creating inclusive learning environments, providing resources, and offering opportunities for hands-on experiences that make STEM subjects more accessible and engaging.

    </p>
    <p class="text-3xl font-semibold mt-8 mb-4">Encouraging Pursuit of STEM Careers

    </p>
    <p class="text-xl">
    University and Career Guidance:
    <br/>
    Navigating the transition from STEM education to a career can be challenging for young women. University and career guidance programs are crucial in providing support, information, and mentorship to guide women through the educational and professional aspects of their STEM journey.    <br/>
    <br/>
    Workplace Inclusivity: <br />
    While progress has been made, women still face challenges in STEM workplaces. Addressing issues such as gender bias, creating inclusive work environments, and promoting diversity in leadership positions are crucial steps toward fostering a more equitable STEM industry.

    </p>

    <p class="text-3xl font-semibold mt-8 mb-4">Conclusion</p>
    <p class="text-xl">
    In conclusion, "Women in STEM: Nurturing the Next Generation of Innovators" is a call to action. It highlights the current challenges, showcases successful initiatives, and emphasizes the importance of collective efforts to ensure that every young girl has the opportunity to explore, excel, and lead in the exciting world of STEM. By nurturing the next generation of female innovators, we not only address gender equality but also propel our societies toward a future enriched by diverse talents and perspectives.
    </p>
  `
},
    3: { title: 'The Art of Creative Living: Embracing Bohemian Spirit', 
    content: 
    `
  <p class="text-3xl font-semibold mb-4">Introduction</p>
  <p class="text-xl">
    Embracing Bohemian Spirit:
    <br/> 
    Welcome to the world of free-spirited living, where creativity knows no bounds and unconventional lifestyles are celebrated. The bohemian spirit is not just a style; it's a way of embracing individuality and expressing oneself authentically. In this article, we delve into the art of creative living, exploring the beauty of bohemian culture and its timeless appeal.
    <br/> 
    <br/> 
    The Allure of Bohemian Lifestyle:
    <br/> 
    The bohemian lifestyle transcends conventional norms, encouraging a vibrant, eclectic, and mindful approach to life. It's a celebration of artistic expression, unique personal styles, and a commitment to living authentically. Join us on a journey into the heart of bohemian living.
  </p>

  <p class="text-3xl font-semibold mt-8 mb-4">Exploring Bohemian Creativity</p>
  <p class="text-xl">
    Artistic Expression: <br/>
    Bohemian living places a strong emphasis on artistic expression. From vibrant paintings to handcrafted decor, creativity permeates every aspect of a bohemian lifestyle. We explore the various forms of artistic expression that define the bohemian spirit.
    <br/><br/>
    Unconventional Living Spaces: <br/>
    Bohemian homes are a canvas for self-expression. Dive into the world of unconventional living spaces, where mismatched furniture, vibrant textiles, and unique decor create a haven for individuality and creativity.
  </p>

  <p class="text-3xl font-semibold mt-8 mb-4">The Bohemian Wardrobe</p>
  <p class="text-xl">
    Fashion as Art: <br/>
    Bohemian fashion goes beyond trends, embracing clothing as a form of artistic expression. From flowing skirts to layered accessories, explore the bohemian wardrobe and its connection to self-expression and freedom.
    <br/>
    <br/>
    Sustainable and Ethical Choices: <br/>
    The bohemian lifestyle often aligns with sustainability and ethical choices. Discover how bohemian fashion enthusiasts contribute to a more conscious and eco-friendly approach to clothing and personal style.
  </p>

  <p class="text-3xl font-semibold mt-8 mb-4">Embracing a Mindful Bohemian Lifestyle</p>
  <p class="text-xl">
    Mindful Practices: <br/>
    Bohemian living encourages mindfulness and a connection to the present moment. Explore mindfulness practices, from meditation to intentional living, that are integral to the bohemian lifestyle.
    <br/>
    <br/>
    Communal Living and Connection: <br/>
    The bohemian spirit thrives on community and connection. Learn about communal living, artistic gatherings, and the sense of belonging that comes with embracing the bohemian lifestyle.
  </p>

  <p class="text-3xl font-semibold mt-8 mb-4">Conclusion</p>
  <p class="text-xl">
    In conclusion, "The Art of Creative Living: Embracing Bohemian Spirit" invites you to break free from the ordinary and embrace a lifestyle rich in creativity, authenticity, and mindfulness. By delving into the bohemian spirit, we discover the beauty of living life as a canvas for artistic expression and a celebration of individuality. Whether you're an artist, a free spirit, or someone seeking a more unconventional path, the bohemian lifestyle offers an inspiring journey toward creative living.
  </p>
`
},
  }[id];

  return (
    <div className='flex flex-col text-indigo-900 lg:px-44 md:px-16  max-md:px-16 py-8 gap-12 mb-10'>
        <div className=" font-semibold text-center lg:text-5xl md:text-5xl max-md:text-3xl w-full">
        {selectedArticle.title}
        </div>    
        <div className='text-justify'>
        <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
        </div>
    </div>
  );
};

export default AllArticles;
