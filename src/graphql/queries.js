/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      lastname
      media
      activities {
        items {
          id
          type
          typeId
          status
          meta
          createdAt
          updatedAt
          userActivitiesId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      memberships {
        items {
          status
          type
          expires_at
          meta_stripe
          id
          createdAt
          updatedAt
          userMembershipsId
        }
        nextToken
      }
      biography
      church
      country
      interests
      rol
      customerStripe
      cognitoId
      coupons {
        items {
          id
          code
          description
          price
          status
          createdAt
          updatedAt
          userCouponsId
          couponUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      name
      lastname
      media
      email
      avatar
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      position
      createdAt
      updatedAt
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastname
        media
        email
        avatar
        courses {
          nextToken
        }
        position
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCourse = /* GraphQL */ `
  query GetUserCourse($id: ID!) {
    getUserCourse(id: $id) {
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      id
      createdAt
      updatedAt
      userUserCoursesId
      courseUserCoursesId
    }
  }
`;
export const listUserCourses = /* GraphQL */ `
  query ListUserCourses(
    $filter: ModelUserCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        status
        user {
          id
          email
          name
          lastname
          media
          biography
          church
          country
          interests
          rol
          customerStripe
          cognitoId
          createdAt
          updatedAt
        }
        course {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        id
        createdAt
        updatedAt
        userUserCoursesId
        courseUserCoursesId
      }
      nextToken
    }
  }
`;
export const getMembership = /* GraphQL */ `
  query GetMembership($id: ID!) {
    getMembership(id: $id) {
      status
      type
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      expires_at
      meta_stripe
      packCourses {
        courseId
        addedDate
      }
      id
      createdAt
      updatedAt
      userMembershipsId
    }
  }
`;
export const listMemberships = /* GraphQL */ `
  query ListMemberships(
    $filter: ModelMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        status
        type
        user {
          id
          email
          name
          lastname
          media
          biography
          church
          country
          interests
          rol
          customerStripe
          cognitoId
          createdAt
          updatedAt
        }
        expires_at
        meta_stripe
        packCourses {
          courseId
          addedDate
        }
        id
        createdAt
        updatedAt
        userMembershipsId
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      name
      title
      description
      author {
        id
        name
        lastname
        media
        email
        avatar
        courses {
          nextToken
        }
        position
        createdAt
        updatedAt
      }
      category {
        id
        name
        courses {
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      priceId
      price
      discount
      hours
      image
      poster
      video
      vimeo_id
      rating
      topic
      subtopics {
        items {
          id
          text
          createdAt
          updatedAt
          courseSubtopicsId
        }
        nextToken
      }
      lessons {
        items {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      language
      pack {
        id
        description
        price
        status
        courses {
          nextToken
        }
        priceId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      authorCoursesId
      categoryCoursesId
      packCoursesId
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      nextToken
    }
  }
`;
export const getSubtopic = /* GraphQL */ `
  query GetSubtopic($id: ID!) {
    getSubtopic(id: $id) {
      id
      text
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      createdAt
      updatedAt
      courseSubtopicsId
    }
  }
`;
export const listSubtopics = /* GraphQL */ `
  query ListSubtopics(
    $filter: ModelSubtopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubtopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        course {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        createdAt
        updatedAt
        courseSubtopicsId
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      color
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        courses {
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      type
      typeId
      status
      meta
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userActivitiesId
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        typeId
        status
        meta
        user {
          id
          email
          name
          lastname
          media
          biography
          church
          country
          interests
          rol
          customerStripe
          cognitoId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userActivitiesId
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      title
      description
      content
      pdf_link
      image_url
      vimeo_id
      order
      time
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      test {
        id
        description
        lesson {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        questions {
          id
          question
        }
        createdAt
        updatedAt
        testLessonId
      }
      createdAt
      updatedAt
      courseLessonsId
      lessonTestId
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        content
        pdf_link
        image_url
        vimeo_id
        order
        time
        course {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        test {
          id
          description
          createdAt
          updatedAt
          testLessonId
        }
        createdAt
        updatedAt
        courseLessonsId
        lessonTestId
      }
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      description
      lesson {
        id
        title
        description
        content
        pdf_link
        image_url
        vimeo_id
        order
        time
        course {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        test {
          id
          description
          createdAt
          updatedAt
          testLessonId
        }
        createdAt
        updatedAt
        courseLessonsId
        lessonTestId
      }
      questions {
        id
        question
        options {
          order
          answer
          correct
        }
      }
      createdAt
      updatedAt
      testLessonId
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        lesson {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        questions {
          id
          question
        }
        createdAt
        updatedAt
        testLessonId
      }
      nextToken
    }
  }
`;
export const getPack = /* GraphQL */ `
  query GetPack($id: ID!) {
    getPack(id: $id) {
      id
      description
      price
      status
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      priceId
      createdAt
      updatedAt
    }
  }
`;
export const listPacks = /* GraphQL */ `
  query ListPacks(
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        price
        status
        courses {
          nextToken
        }
        priceId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
      code
      description
      price
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCouponsId
      couponUserId
    }
  }
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        description
        price
        status
        user {
          id
          email
          name
          lastname
          media
          biography
          church
          country
          interests
          rol
          customerStripe
          cognitoId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCouponsId
        couponUserId
      }
      nextToken
    }
  }
`;
