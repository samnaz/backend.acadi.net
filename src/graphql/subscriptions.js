/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onCreateAuthor(filter: $filter) {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onUpdateAuthor(filter: $filter) {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onDeleteAuthor(filter: $filter) {
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
export const onCreateUserCourse = /* GraphQL */ `
  subscription OnCreateUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
  ) {
    onCreateUserCourse(filter: $filter) {
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
export const onUpdateUserCourse = /* GraphQL */ `
  subscription OnUpdateUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
  ) {
    onUpdateUserCourse(filter: $filter) {
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
export const onDeleteUserCourse = /* GraphQL */ `
  subscription OnDeleteUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
  ) {
    onDeleteUserCourse(filter: $filter) {
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
export const onCreateMembership = /* GraphQL */ `
  subscription OnCreateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onCreateMembership(filter: $filter) {
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
export const onUpdateMembership = /* GraphQL */ `
  subscription OnUpdateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onUpdateMembership(filter: $filter) {
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
export const onDeleteMembership = /* GraphQL */ `
  subscription OnDeleteMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onDeleteMembership(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateSubtopic = /* GraphQL */ `
  subscription OnCreateSubtopic($filter: ModelSubscriptionSubtopicFilterInput) {
    onCreateSubtopic(filter: $filter) {
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
export const onUpdateSubtopic = /* GraphQL */ `
  subscription OnUpdateSubtopic($filter: ModelSubscriptionSubtopicFilterInput) {
    onUpdateSubtopic(filter: $filter) {
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
export const onDeleteSubtopic = /* GraphQL */ `
  subscription OnDeleteSubtopic($filter: ModelSubscriptionSubtopicFilterInput) {
    onDeleteSubtopic(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onCreateActivity(filter: $filter) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onUpdateActivity(filter: $filter) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
    onDeleteActivity(filter: $filter) {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest($filter: ModelSubscriptionTestFilterInput) {
    onCreateTest(filter: $filter) {
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
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest($filter: ModelSubscriptionTestFilterInput) {
    onUpdateTest(filter: $filter) {
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
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest($filter: ModelSubscriptionTestFilterInput) {
    onDeleteTest(filter: $filter) {
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
export const onCreatePack = /* GraphQL */ `
  subscription OnCreatePack($filter: ModelSubscriptionPackFilterInput) {
    onCreatePack(filter: $filter) {
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
export const onUpdatePack = /* GraphQL */ `
  subscription OnUpdatePack($filter: ModelSubscriptionPackFilterInput) {
    onUpdatePack(filter: $filter) {
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
export const onDeletePack = /* GraphQL */ `
  subscription OnDeletePack($filter: ModelSubscriptionPackFilterInput) {
    onDeletePack(filter: $filter) {
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
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onCreateCoupon(filter: $filter) {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onUpdateCoupon(filter: $filter) {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onDeleteCoupon(filter: $filter) {
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
